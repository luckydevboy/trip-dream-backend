export default interface AccommodationInterface {
  title: string;
  images: string[];
  rating: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  price: number;
}
