import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createBlogInput } from '@aaryan302323/medium-common';
import { updateBlogInput } from '@aaryan302323/medium-common';
export const blogRouter = new Hono();
blogRouter.use("/*", async (c, next) => {
    const header = c.req.header("Authorization") || "";
    try {
        const user = await verify(header, c.env.JWT_SECRET);
        if (user) {
            c.set("userId", user.id);
            await next();
        }
        else {
            c.status(403);
            return c.json({ error: "unauthorized" });
        }
    }
    catch (error) {
        c.status(403);
        c.json({
            error: "you have not logged in"
        });
    }
});
blogRouter.post("/", async (c) => {
    const body = await c.req.json();
    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const { success } = createBlogInput.safeParse(body);
    if (!success) {
        c.status(400);
        console.log(success);
        return c.json({ message: "invalid input" });
    }
    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId
        },
    });
    return c.json({
        blog
    });
});
blogRouter.put("/", async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const { success } = updateBlogInput.safeParse(body);
    if (!success) {
        c.status(400);
        console.log(success);
        return c.json({ message: "invalid input" });
    }
    const blog = await prisma.post.update({
        where: { id: body.id },
        data: {
            title: body.title,
            content: body.content,
        },
        select: {
            id: true,
            title: true,
            content: true
        }
    });
    return c.json({
        all: blog,
    });
});
blogRouter.get("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const blog = await prisma.post.findMany();
    return c.json({
        blog
    });
});
blogRouter.get("/:id", async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const blog = await prisma.post.findFirst({
            where: { id: Number(id) },
        });
        return c.json({
            blog,
        });
    }
    catch (error) {
        c.status(403);
        return c.json({
            Message: "error while fetching blog",
        });
    }
});
