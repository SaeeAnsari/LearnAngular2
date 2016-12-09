export interface UserInterface{
    id: number,
    name: string,
    email: string,
    DOB: Date,    
    location: GPSLocation    
}

export interface GPSLocation{
    latitude: number,
    longitude: number
}

