import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table } from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface CardTableProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function CardTable({ title, description, children, className }: CardTableProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>{children}</Table>
        </div>
      </CardContent>
    </Card>
  );
}
