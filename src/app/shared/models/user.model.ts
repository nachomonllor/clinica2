import { Category } from '@shared/models/category.model';


export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword?: string;
  role: string;
  active: boolean;
  is_verified: boolean;
  categories?: Category[];
  // TimeSlot?: TimeSlot[];
  img1: string;
  img2: string;
}
