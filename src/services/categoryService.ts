import { notFound } from "@tanstack/react-router";

export async function getCategoryByName(name: string) {
    const params = new URLSearchParams({ page: '1', limit: '1', search: name });

    console.log(`http://localhost:3000/categories?${params.toString()}`);

    const response = await fetch(`http://localhost:3000/categories?${params.toString()}`);

    if (!response.ok) {
        throw notFound();
    }

    const result = await response.json();

    if (!result.data || result.data.length === 0) {
        throw notFound();
    }

    return result.data[0];
}