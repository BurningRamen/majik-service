/* -------------------------------------------------------
   Service Types 
------------------------------------------------------- */

export const ServiceType = {
  TIME_BASED: "Time-Based",
  PROJECT_BASED: "Project-Based",
  USAGE_BASED: "Usage-Based",
  OTHER: "Other",
} as const;

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

/* -------------------------------------------------------
   Status & Visibility
------------------------------------------------------- */

export const ServiceStatus = {
  DRAFT: "Draft",
  ACTIVE: "Active",
  FULLY_BOOKED: "Fully Booked",
  DISCONTINUED: "Discontinued",
} as const;

export type ServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus];

export const ServiceVisibility = {
  PRIVATE: "Private",
  PUBLIC: "Public",
} as const;

export type ServiceVisibility =
  (typeof ServiceVisibility)[keyof typeof ServiceVisibility];

/**
 * Units for billing a service.
 */

export const RateUnit = {
  PER_HOUR: "Per Hour",
  PER_DAY: "Per Day",
  PER_SESSION: "Per Session",
  FIXED: "Per Fixed",
  PER_UNIT: "Per Unit",
} as const;

export type RateUnit = (typeof RateUnit)[keyof typeof RateUnit];

export const CapacityPeriodResizeMode = {
  DEFAULT: "default",
  DISTRIBUTE: "distribute",
} as const;

export type CapacityPeriodResizeMode =
  (typeof CapacityPeriodResizeMode)[keyof typeof CapacityPeriodResizeMode];
