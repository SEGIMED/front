////////////////////////////////////////////////////////////////////////////////
// 🛑 Nothing in here has anything to do with Nextjs, it's just a fake database
////////////////////////////////////////////////////////////////////////////////

import { faker } from '@faker-js/faker';
import { matchSorter } from 'match-sorter'; // For filtering

// Define the shape of User data

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
};

// Mock user data store
export const fakeUsers = {
  records: [] as User[], // Holds the list of user objects

  // Initialize with sample data
  initialize() {
    const sampleUsers: User[] = [];
    function generateRandomUserData(id: number): User {
      return {
        id,
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: `${faker.internet.email()}`,
        phone: `001-${Math.floor(Math.random() * 900) + 100}-${
          Math.floor(Math.random() * 900) + 100
        }-${Math.floor(Math.random() * 10000)}`
      };
    }

    // Generate remaining records
    for (let i = 1; i <= 20; i++) {
      sampleUsers.push(generateRandomUserData(i));
    }

    this.records = sampleUsers;
  },

  // Get all users with optional gender filtering and search
  async getAll({ search }: { genders?: string[]; search?: string }) {
    let users = [...this.records];

    // Search functionality across multiple fields
    if (search) {
      users = matchSorter(users, search, {
        keys: [
          'first_name',
          'last_name',
          'email',
          'job',
          'city',
          'street',
          'state',
          'country'
        ]
      });
    }

    return users;
  },

  // Get paginated results with optional gender filtering and search
  async getUsers({
    page = 1,
    limit = 10,
    genders,
    search
  }: {
    page?: number;
    limit?: number;
    genders?: string;
    search?: string;
  }) {
    const gendersArray = genders ? genders.split('.') : [];
    console.log('gendersArray', gendersArray);
    const allUsers = await this.getAll({ genders: gendersArray, search });
    const totalUsers = allUsers.length;

    // Pagination logic
    const offset = (page - 1) * limit;
    const paginatedUsers = allUsers.slice(offset, offset + limit);

    // Mock current time
    const currentTime = new Date().toISOString();

    // Return paginated response
    return {
      success: true,
      time: currentTime,
      message: 'Sample data for testing and learning purposes',
      total_users: totalUsers,
      offset,
      limit,
      users: paginatedUsers
    };
  }
};

// Initialize sample users
fakeUsers.initialize();
