import { NextResponse } from "next/server";

import fs from "fs";
import path from "path";

export async function GET(request: Request) {
    const searchParams = new URL(request.url).searchParams;
    const fileName = searchParams.get("fileName");

    if (!fileName) {
        return NextResponse.json(
            { error: "fileName is required" },
            { status: 400 }
        );
    }

    const componentsList = fs.readdirSync(
        path.join(process.cwd(), "components", "custom")
    );

    if (!componentsList.includes(fileName)) {
        return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const filePath = path.join(process.cwd(), "components", "custom", fileName);

    try {
        const text = fs.readFileSync(filePath, "utf-8");
        return NextResponse.json({ text });
    } catch (error) {
        return NextResponse.json({ error: "File not found" }, { status: 404 });
    }
}
