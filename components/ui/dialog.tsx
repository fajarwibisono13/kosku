import * as React from "react";

const Dialog = ({ children }) => <div>{children}</div>;
const DialogTrigger = ({ asChild, children }) => <>{children}</>;
const DialogContent = ({ children }) => <div className="p-4 border rounded-md bg-white shadow">{children}</div>;
const DialogHeader = ({ children }) => <div className="mb-2">{children}</div>;
const DialogTitle = ({ children }) => <h2 className="text-lg font-bold">{children}</h2>;

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle };
