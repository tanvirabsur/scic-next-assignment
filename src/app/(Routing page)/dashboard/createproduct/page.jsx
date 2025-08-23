"use client";

import { CircularProgress } from "@mui/material";
import React, { useState } from "react";

export default function AddProductForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [form, setForm] = useState({
        name: "",
        image: "",
        price: "",
        category: "",
        description: "",
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const v = validate();
        if (v) {
            setError(v);
            return;
        }
         setLoading(true);
    setError("");
    setSuccess("");
    }
   


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
        setError("");
        setSuccess("");
    };

    const validate = () => {
        if (!form.name.trim()) return "Name is required";
        if (!form.price || isNaN(Number(form.price))) return "Valid price is required";
        if (!form.image.trim()) return "Image URL is required";
        return "";
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Form Header */}
                    <div className="bg-primary px-8 py-6">
                        <h2 className="text-2xl font-bold text-white">Create New Product</h2>
                        <p className="text-primary-content/80 mt-1">Fill in the details to add a new product to your store</p>
                    </div>

                    {/* Alert Messages */}
                    <div className="px-8 pt-6">
                        {error && (
                            <div className="alert alert-error mb-6 animate-shake">
                                <svg className="w-6 h-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{error}</span>
                            </div>
                        )}
                        {success && (
                            <div className="alert alert-success mb-6 animate-fadeIn">
                                <svg className="w-6 h-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{success}</span>
                            </div>
                        )}
                    </div>

                    {/* Main Form */}
                    <form onSubmit={handleSubmit} className="px-8 pb-8">
                        <div className="grid grid-cols-1 gap-6">
                            {/* Product Name */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-medium">Product Name</span>
                                </label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="input input-bordered w-full focus:input-primary transition-colors"
                                    placeholder="Example: Wireless Headphones"
                                    required
                                />
                            </div>

                            {/* Image URL with Preview */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-medium">Image URL</span>
                                </label>
                                <input
                                    name="image"
                                    value={form.image}
                                    onChange={handleChange}
                                    className="input input-bordered w-full focus:input-primary transition-colors"
                                    placeholder="https://..."
                                    required
                                />
                                {form.image && (
                                    <div className="mt-4 p-4 bg-base-200 rounded-xl">
                                        <div className="text-sm font-medium mb-2">Image Preview</div>
                                        <div className="relative aspect-square w-48 rounded-lg overflow-hidden bg-white">
                                            <img
                                                src={form.image}
                                                alt="preview"
                                                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                                                onError={(e) => (e.currentTarget.style.opacity = "0.5")}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Price and Category Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-medium">Price (USD)</span>
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral">$</span>
                                        <input
                                            name="price"
                                            value={form.price}
                                            onChange={handleChange}
                                            className="input input-bordered w-full pl-7 focus:input-primary transition-colors"
                                            placeholder="49.99"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-medium">Category</span>
                                    </label>
                                    <select
                                        name="category"
                                        value={form.category}
                                        onChange={handleChange}
                                        className="select select-bordered w-full focus:select-primary transition-colors"
                                    >
                                        <option value="">Select a category</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Clothing">Clothing</option>
                                        <option value="Books">Books</option>
                                        <option value="Home">Home & Garden</option>
                                        <option value="Sports">Sports & Outdoors</option>
                                    </select>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-medium">Description</span>
                                </label>
                                <textarea
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    className="textarea textarea-bordered w-full h-32 focus:textarea-primary transition-colors"
                                    placeholder="Provide a detailed description of your product..."
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                                <button
                                    type="submit"
                                    className={`btn btn-primary w-full sm:w-auto min-w-[150px] ${loading ? "text-blue-600" : ""}`}
                                    disabled={loading}
                                >
                                    {loading ? <>creating <CircularProgress size={20} color="secondary" /></> : "Create Product"}
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-ghost w-full sm:w-auto"
                                    onClick={() => setForm({ name: "", image: "", price: "", category: "", description: "" })}
                                    disabled={loading}
                                >
                                    Reset Form
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}