import { Category, Destination, EmergencyContact, HeroConfig, Organization, EventItem } from '../types';

export const api = {
  async getHero(): Promise<HeroConfig | null> {
    try {
      const res = await fetch('/api/v1/hero');
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  async getCategories(): Promise<Category[] | null> {
    try {
      const res = await fetch('/api/v1/categories');
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  async getDestinations(): Promise<Destination[] | null> {
    try {
      const res = await fetch('/api/v1/destinations');
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  async getEmergencyContacts(): Promise<EmergencyContact[] | null> {
    try {
      const res = await fetch('/api/v1/emergency-contacts');
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  async getOrganizations(): Promise<Organization[] | null> {
    try {
      const res = await fetch('/api/v1/organizations');
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  async getEvents(): Promise<EventItem[] | null> {
    try {
      const res = await fetch('/api/v1/events');
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  // Admin CRUD Methods
  async updateHero(heroData: Partial<HeroConfig>): Promise<HeroConfig | null> {
    try {
      const res = await fetch('/api/v1/hero', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(heroData),
      });
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  async createCategory(category: Partial<Category>): Promise<Category | null> {
    try {
      const res = await fetch('/api/v1/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(category),
      });
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  async updateCategory(id: number, category: Partial<Category>): Promise<Category | null> {
    try {
      const res = await fetch(`/api/v1/categories/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(category),
      });
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  async deleteCategory(id: number): Promise<boolean> {
    try {
      const res = await fetch(`/api/v1/categories/${id}`, { method: 'DELETE' });
      return res.ok;
    } catch {
      return false;
    }
  },

  async createDestination(dest: Partial<Destination>): Promise<Destination | null> {
    try {
      const res = await fetch('/api/v1/destinations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dest),
      });
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  async updateDestination(id: number, dest: Partial<Destination>): Promise<Destination | null> {
    try {
      const res = await fetch(`/api/v1/destinations/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dest),
      });
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  async deleteDestination(id: number): Promise<boolean> {
    try {
      const res = await fetch(`/api/v1/destinations/${id}`, { method: 'DELETE' });
      return res.ok;
    } catch {
      return false;
    }
  },

  async createEmergencyContact(contact: Partial<EmergencyContact>): Promise<EmergencyContact | null> {
    try {
      const res = await fetch('/api/v1/emergency-contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
      });
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  async updateEmergencyContact(id: number, contact: Partial<EmergencyContact>): Promise<EmergencyContact | null> {
    try {
      const res = await fetch(`/api/v1/emergency-contacts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
      });
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  async deleteEmergencyContact(id: number): Promise<boolean> {
    try {
      const res = await fetch(`/api/v1/emergency-contacts/${id}`, { method: 'DELETE' });
      return res.ok;
    } catch {
      return false;
    }
  },

  async createOrganization(org: Partial<Organization>): Promise<Organization | null> {
    try {
      const res = await fetch('/api/v1/organizations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(org),
      });
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  async updateOrganization(id: number, org: Partial<Organization>): Promise<Organization | null> {
    try {
      const res = await fetch(`/api/v1/organizations/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(org),
      });
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  async deleteOrganization(id: number): Promise<boolean> {
    try {
      const res = await fetch(`/api/v1/organizations/${id}`, { method: 'DELETE' });
      return res.ok;
    } catch {
      return false;
    }
  },

  async createEvent(event: Partial<EventItem>): Promise<EventItem | null> {
    try {
      const res = await fetch('/api/v1/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
      });
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  async updateEvent(id: number, event: Partial<EventItem>): Promise<EventItem | null> {
    try {
      const res = await fetch(`/api/v1/events/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
      });
      if (!res.ok) return null;
      const json = await res.json();
      return json.data || null;
    } catch {
      return null;
    }
  },

  async deleteEvent(id: number): Promise<boolean> {
    try {
      const res = await fetch(`/api/v1/events/${id}`, { method: 'DELETE' });
      return res.ok;
    } catch {
      return false;
    }
  },
};

