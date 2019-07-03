export class Device {
    constructor(
        public id: number,
        public name: string,
        public type: 'Gas' | 'Electricity',
        public wattage: number,
        public avgUsagePerDay: number
    ) {}
}
