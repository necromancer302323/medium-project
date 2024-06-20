import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signupInput } from '@aaryan302323/medium-common';
import { signinInput } from '@aaryan302323/medium-common';
export const userRouter = new Hono();
userRouter.post("/signup", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success) {
        c.status(400);
        console.log(success);
        return c.json({ message: "invalid input" });
    }
    console.log(success);
    try {
        const user = await prisma.user.create({
            data: {
                email: body.username,
                password: body.password
            }
        });
        return c.json({ message: "user added" });
    }
    catch (e) {
        c.status(403);
        c.json({ message: "an error has occurd try again" });
    }
});
userRouter.post("/signin", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if (!success) {
        c.status(400);
        console.log(success);
        return c.json({ message: "invalid input" });
    }
    const user = await prisma.user.findUnique({
        where: {
            email: body.username,
            password: body.password,
        },
    });
    if (!user) {
        c.status(403);
        return c.json({ error: "user not found" });
    }
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt: token });
});
