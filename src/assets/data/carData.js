// import all images from assets/images directory
import img01 from "../all-images/cars-img/vehicleTrack.jpg";
import img02 from "../all-images/cars-img/fleet2.jpg";
import img03 from "../all-images/cars-img/fuel sys.jpg";
import img04 from "../all-images/cars-img/cargo tracking.jpg";
import img05 from "../all-images/cars-img/DashCamera.jpg";
import img06 from "../all-images/cars-img/Axle load.jpg";
import img07 from "../all-images/cars-img/Insurance.jpg";
const carData = [
  {
    id: 1,
    brand: "Vehicle Tracking",
    rating: 112,
    serviceName: "Vehicle Tracking",
    imgUrl: img01,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Vehicle tracking is a technology that uses Global Positioning System (GPS) to track the movements of a vehicle or fleet of vehicles. It allows organizations to monitor and manage their vehicles in real time, as well as to create reports and analyze data. It can be used to monitor a variety of metrics, including location, speed, fuel consumption, driver behavior, and more. Vehicle tracking can help organizations reduce costs, improve efficiency, and increase safety.",
  },

  {
    id: 2,
    brand: "Fleet Management",
    rating: 102,
    serviceName: "Fleet Management",
    imgUrl: img02,
    model: "Model-2022",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Fleet management is the management of a company's fleet of vehicles, which includes cars, trucks, vans, and other vehicles. It includes tracking, maintenance, and repair of the vehicles in the fleet, as well as the management of drivers, fuel costs, and other fleet-related expenses. Fleet management can help reduce costs and improve efficiency. Additionally, it can help ensure compliance with safety and environmental regulations.",
  },

  {
    id: 3,
    brand: "Fuel Management System",
    rating: 132,
    serviceName: "Fuel Management System",
    imgUrl: img03,
    model: "Model-2022",
    price: 65,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Fuel management is the process of monitoring and controlling fuel usage in order to maximize efficiency, reduce costs, and ensure compliance with regulations. It involves tracking fuel consumption, identifying and rectifying fuel-related issues, and optimizing fuel efficiency. It can be used to identify and address fuel-related problems, such as fuel leakage, fuel theft, and fuel adulteration. By managing fuel consumption and use, organizations can save money and increase their profits.",
  },

  {
    id: 4,
    brand: "Cargo Tracking System",
    rating: 102,
    serviceName: "Cargo Tracking System",
    imgUrl: img04,
    model: "Model-2022",
    price: 70,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "A Cargo Tracking System is a web-based application that allows shippers, logistics operators, and other stakeholders to track the movement of freight shipments in real-time. This system is designed to track the entire life cycle of a shipment, from its origin point to its destination. The system provides tracking information such as the current location of the cargo, the route it has taken, and the estimated time of arrival. It also provides information on any delays and exceptions that arise during the shipment's journey. Additionally, the system can be used to generate reports on the performance of carriers and shipments.",
  },

  {
    id: 5,
    brand: "Dash Camera",
    rating: 94,
    serviceName: "Dash Camera",
    imgUrl: img05,
    model: "Model-2022",
    price: 45,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "A Dash Camera, also known as a Dash Cam, is a small camera that is typically mounted on the dashboard of a vehicle. It records the view out of the front windscreen and is designed to provide evidence in the event of an accident or incident on the road. Dash Cameras usually have a wide-angle lens, night vision capabilities, and can detect motion or sound to automatically record any events that may occur.",
  },
  {
    id: 6,
    brand: "Axle load Monitoring System",
    rating: 119,
    serviceName: "Axle load Monitoring System",
    imgUrl: img06,
    model: "Model-2022",
    price: 85,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Axle Load Monitoring System is designed to provide real-time data for monitoring the loads on individual axles. The system can accurately measure the weight of a single axle or multiple axles in a train. It is composed of a central processing unit, sensors, a power supply, and a communication interface. The system records data on the load on each axle in real-time and transmits it to the central processing unit. The data can be used to identify problems and determine whether a train is overloaded or underloaded. The system can also be used to detect potential safety issues, such as when a vehicle’s load is outside of its design limits.",
  },
  {
    id: 7,
    brand: "Insurance Services",
    rating: 119,
    serviceName: "Insurance services",
    imgUrl: img07,
    model: "Model-2022",
    price: 85,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Motor and health insurance are two specific types of insurance that play a crucial role in our lives today. Motor insurance is important because it provides financial protection against potential damages or losses related to vehicles. It covers the costs of repairs or replacements in case of accidents, theft, or damage caused by natural disasters. Additionally, motor insurance provides liability coverage, protecting individuals from legal and financial consequences if they cause harm or damage to others while driving. Without motor insurance, individuals would be personally responsible for all expenses related to their vehicles, which can be significant and potentially devastating. ",
    descriptionTwo:
      "Health insurance is equally important as it provides coverage for medical expenses and healthcare services. It helps individuals and families manage the high costs of healthcare, including doctor visits, hospital stays, surgeries, medications, and preventive care. Health insurance ensures that individuals have access to necessary medical treatments without facing exorbitant out-of-pocket expenses. It also provides protection against unexpected medical emergencies that can lead to financial hardship. Furthermore, health insurance promotes regular check-ups and preventive care, contributing to overall well-being and early detection of potential health issues.",
    descriptionThree:
      "Both motor and health insurance are essential for individuals to protect themselves from potential financial burdens caused by accidents, illnesses, or other unforeseen events. They provide peace of mind, risk management, and financial security, allowing individuals to focus on their daily lives without constantly worrying about the potential costs of medical treatments or vehicle-related incidents. Additionally, these types of insurance contribute to social welfare by reducing the burden on government healthcare programs and ensuring that individuals can access necessary medical care and maintain their mobility safely.",
  },
];
export default carData;
