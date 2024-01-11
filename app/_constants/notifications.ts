enum NotificationType {
    Important,
    Information,
}

interface Notification {
    id: number;
    type: NotificationType;
    title: string;
    description: string;
    updated: Date;  // Add this line
    tags: string[];
}

export const notifications: Notification[] = [
    {
        id: 1,
        type: NotificationType.Important,
        title: "Important information about Atraf",
        description: "Muminees travelling from Atraf are requested to assemble near the Faiz entrance and follow instructions from their group leaders",
        updated: new Date('2024-01-01'), // Example date
        tags: ["Haram", "Karbala", "Timings"]
    },
    {
        id: 2,
        type: NotificationType.Information,
        title: "Mawaid timings",
        description: "Mawaid will be operational from 7.00AM - 8.30AM in the morning, 1.00PM to 2.30PM in the afternoon and 7.00PM to 9.00PM in the evening.",
        updated: new Date('2024-01-02'), // Example date
        tags: ["Haram", "Karbala", "Timings"]
    },
];
