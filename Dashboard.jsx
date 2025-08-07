import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const salesData = [
  { month: "Jan", leads: 40, conversions: 24 },
  { month: "Feb", leads: 30, conversions: 13 },
  { month: "Mar", leads: 20, conversions: 20 },
  { month: "Apr", leads: 27, conversions: 25 },
  { month: "May", leads: 50, conversions: 30 },
  { month: "Jun", leads: 60, conversions: 35 },
];

export default function Dashboard() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">HSR Motors Dashboard</h1>

      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardContent>
            <h2 className="text-xl font-medium mb-4">Monthly Leads vs Conversions</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="leads" fill="#8884d8" name="Leads" />
                <Bar dataKey="conversions" fill="#82ca9d" name="Conversions" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-medium mb-4">Summary</h2>
            <ul className="space-y-2">
              <li>Total Leads: <strong>227</strong></li>
              <li>Total Conversions: <strong>147</strong></li>
              <li>Conversion Rate: <strong>64.7%</strong></li>
              <li>Best Month: <strong>June</strong></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
