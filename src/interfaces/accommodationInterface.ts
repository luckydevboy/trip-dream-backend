export default interface AccommodationInterface {
  title: string;
  description: string;
  summary: string;
  images: string[];
  rating: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  price: number;
  reviews: number;
}
