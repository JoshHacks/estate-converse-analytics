import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Line, LineChart } from "recharts";
import { PhoneCall, ChartBar, ChartLine, PoundSterling, TrendingUp, MessageSquare, Tag, Clock, FileText } from "lucide-react";

// Example weekly call data
const weeklyCallData = [
  { name: 'Mon', calls: 12, cost: 5.4, leadsGenerated: 3 },
  { name: 'Tue', calls: 19, cost: 8.6, leadsGenerated: 7 },
  { name: 'Wed', calls: 15, cost: 6.8, leadsGenerated: 5 },
  { name: 'Thu', calls: 22, cost: 9.9, leadsGenerated: 10 },
  { name: 'Fri', calls: 28, cost: 12.5, leadsGenerated: 14 },
  { name: 'Sat', calls: 10, cost: 4.5, leadsGenerated: 2 },
  { name: 'Sun', calls: 8, cost: 3.6, leadsGenerated: 1 },
];

// Example call history data
const callHistoryData = [
  {
    id: 1,
    date: "2023-09-12",
    time: "14:23",
    duration: "3:45",
    type: "Property Viewing",
    transcript: "Hello, I'm calling about the property on 42 Oak Street. Is it still available for viewing? I'd like to schedule a time to see it tomorrow afternoon if possible.",
    summary: "Prospect interested in viewing 42 Oak Street property tomorrow afternoon.",
    cost: "£0.35",
  },
  {
    id: 2,
    date: "2023-09-11",
    time: "10:15",
    duration: "5:12",
    type: "Property Valuation",
    transcript: "Hi there, I'm thinking of selling my house on Park Avenue and would like to get a valuation. Can someone come out this week to take a look? I've done some renovations recently that I think have really increased the value.",
    summary: "Seller requesting property valuation this week for renovated house on Park Avenue.",
    cost: "£0.50",
  },
  {
    id: 3,
    date: "2023-09-10",
    time: "16:48",
    duration: "2:30",
    type: "Price Inquiry",
    transcript: "Good afternoon, I saw your listing for the 3-bedroom in Riverdale. Could you tell me what the asking price is? And has there been much interest in it so far?",
    summary: "Prospect asking about price and interest level for 3-bedroom Riverdale property.",
    cost: "£0.25",
  },
];

const chartConfig = {
  calls: {
    label: "Total Calls",
    color: "#6366f1",
  },
  cost: {
    label: "Cost (£)",
    color: "#ec4899",
  },
  leadsGenerated: {
    label: "Leads Generated",
    color: "#10b981",
  },
};

const AnalyticsDashboard = () => {
  return (
    <section className="py-16 bg-gray-50" id="analytics">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real-Time Call Analytics
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Monitor your calls, track costs, and analyze lead conversion with EstateTalk's powerful dashboard.
          </p>
        </div>

        <div className="space-y-8">
          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Calls</CardTitle>
                <PhoneCall className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">114</div>
                <p className="text-xs text-gray-500">+28% from last week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Call Costs</CardTitle>
                <PoundSterling className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">£51.30</div>
                <p className="text-xs text-gray-500">+15% from last week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Leads Generated</CardTitle>
                <TrendingUp className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">42</div>
                <p className="text-xs text-gray-500">+39% from last week</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts - Adjusted to fit without scrolling */}
          <Tabs defaultValue="bar" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="bar" className="flex items-center gap-2">
                <ChartBar className="h-4 w-4" />
                <span>Bar Chart</span>
              </TabsTrigger>
              <TabsTrigger value="line" className="flex items-center gap-2">
                <ChartLine className="h-4 w-4" />
                <span>Line Chart</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="bar" className="pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Call Statistics</CardTitle>
                  <CardDescription>
                    Overview of calls, costs, and leads for the past week
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 sm:p-4">
                  <div style={{ height: '300px', width: '100%' }}>
                    <ChartContainer config={chartConfig}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart 
                          data={weeklyCallData} 
                          margin={{ top: 10, right: 30, left: 0, bottom: 35 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis yAxisId="left" orientation="left" stroke="#6366f1" />
                          <YAxis yAxisId="right" orientation="right" stroke="#ec4899" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: '10px', marginBottom: '20px' }} />
                          <Bar yAxisId="left" dataKey="calls" name="Calls" fill="#6366f1" radius={[4, 4, 0, 0]} />
                          <Bar yAxisId="right" dataKey="cost" name="Cost (£)" fill="#ec4899" radius={[4, 4, 0, 0]} />
                          <Bar yAxisId="left" dataKey="leadsGenerated" name="Leads" fill="#10b981" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="line" className="pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Call Trends</CardTitle>
                  <CardDescription>
                    Trends of calls, costs, and leads for the past week
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 sm:p-4">
                  <div style={{ height: '300px', width: '100%' }}>
                    <ChartContainer config={chartConfig}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart 
                          data={weeklyCallData} 
                          margin={{ top: 10, right: 30, left: 0, bottom: 35 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis yAxisId="left" orientation="left" stroke="#6366f1" />
                          <YAxis yAxisId="right" orientation="right" stroke="#ec4899" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: '10px', marginBottom: '20px' }} />
                          <Line yAxisId="left" type="monotone" dataKey="calls" name="Calls" stroke="#6366f1" activeDot={{ r: 8 }} strokeWidth={2} />
                          <Line yAxisId="right" type="monotone" dataKey="cost" name="Cost (£)" stroke="#ec4899" activeDot={{ r: 8 }} strokeWidth={2} />
                          <Line yAxisId="left" type="monotone" dataKey="leadsGenerated" name="Leads" stroke="#10b981" activeDot={{ r: 8 }} strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Call History Table */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Call History</CardTitle>
              <CardDescription>
                Review recent calls with AI-generated summaries and transcripts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date/Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Cost</TableHead>
                      <TableHead className="hidden md:table-cell">Summary</TableHead>
                      <TableHead className="hidden lg:table-cell">Transcript</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {callHistoryData.map((call) => (
                      <TableRow key={call.id}>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="font-medium">{call.date}</span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {call.time}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{call.duration}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Tag className="h-3 w-3 text-estate-600" />
                            <span>{call.type}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <PoundSterling className="h-3 w-3 text-pink-500" />
                            <span>{call.cost.replace('£', '')}</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell max-w-xs">
                          <div className="flex items-start gap-1">
                            <MessageSquare className="h-3 w-3 mt-1 text-estate-600 flex-shrink-0" />
                            <span className="text-xs truncate">{call.summary}</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell max-w-md">
                          <div className="flex items-start gap-1">
                            <FileText className="h-3 w-3 mt-1 text-gray-500 flex-shrink-0" />
                            <span className="text-xs truncate">{call.transcript}</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;
