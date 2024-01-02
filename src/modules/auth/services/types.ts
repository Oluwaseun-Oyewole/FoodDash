export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface LoginResponseBody {
  geoLocation: {
    type: string;
    coordinates: string[];
    deliveries_per_month: { min: number; max: number };
    numbers_of_drivers: { min: number; max: number };
    _id: string;
    email: string;
    account_type: string;
    phone_number: string;
    fullname: string;
    business_name: string | null;
    owners_fullname: string | null;
    account_status: string;
    street: string;
    city: string;
    state: string;
    country: string;
    heard_about_us: string;
    heard_about_us_others: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

export interface SignUpRequestBody {
  fullname: string;
  account_type: string;
  email: string;
  password: string;
  phone_number: string;
}
