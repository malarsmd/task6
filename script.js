[9:08 pm, 29/10/2023] M💜..: class Person:
    def _init_(self, name, age, address):
        self.name = name
        self.age = age
        self.address = address

    def _str_(self):
        return f"Name: {self.name}, Age: {self.age}, Address: {self.address}"

# Create two person instances
person1 = Person("John Doe", 30, "123 Main St, Anytown")
person2 = Person("Jane Smith", 25, "456 Elm St, Othertown")

# Calculate the sum of their ages
total_age = person1.age + person2.age

print(f"Total age of {person1.name} and {person2.name} is {total_age} years.")
[9:09 pm, 29/10/2023] M💜..: class UberPricing:
    base_fare = 2.0
    cost_per_mile = 1.5
    cost_per_minute = 0.2

    def _init_(self, distance, time):
        self.distance = distance
        self.time = time

    def calculate_price(self):
        fare = self.base_fare + (self.distance * self.cost_per_mile) + (self.time * self.cost_per_minute)
        return fare

# Example usage:
distance = 5.0  # in miles
time = 15  # in minutes
uber_ride = UberPricing(distance, time)
price = uber_ride.calculate_price()
print(f"The estimated Uber price for a {distance} mile, {time} minute ride is ${price:.2f}")
