import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1";

export const getAllVehicles = async () => {
  // let response = await axios.get(
  //   `${BASE_URL}/vehicle/details/all`
  // );

  let response = {"data":{"data": [
    {
        "id": "69becf84ea3e5a4ffa1cd8c2",
        "vehicleNumber": "TN81ESQB0734",
        "vehicleClass": "Heavy Goods",
        "modelYear": 2024,
        "username": "venkat_admin",
        "natureOfWork": "Logistics",
        "ownerAddress": "123 Street, City",
        "phoneNumber": "9876543210",
        "fcDetails": "Valid until 2028",
        "icDetails": "Policy #12345",
        "taxDetails": "Paid 2024",
        "workDescription": "Delivery",
        "createdAt": "2026-03-21T17:04:04.309Z",
        "updatedAt": "2026-03-21T17:04:04.309Z"
    },
    {
        "id": "69becf80ea3e5a4ffa1cd8c1",
        "vehicleNumber": "TN01ESQB0734",
        "vehicleClass": "Heavy Goods",
        "modelYear": 2024,
        "username": "venkat_admin",
        "natureOfWork": "Logistics",
        "ownerAddress": "123 Street, City",
        "phoneNumber": "9876543210",
        "fcDetails": "Valid until 2028",
        "icDetails": "Policy #12345",
        "taxDetails": "Paid 2024",
        "workDescription": "Delivery",
        "createdAt": "2026-03-21T17:04:00.444Z",
        "updatedAt": "2026-03-21T17:04:00.444Z"
    },
    {
        "id": "69becf7aea3e5a4ffa1cd8c0",
        "vehicleNumber": "TN01SQB0734",
        "vehicleClass": "Heavy Goods",
        "modelYear": 2024,
        "username": "venkat_admin",
        "natureOfWork": "Logistics",
        "ownerAddress": "123 Street, City",
        "phoneNumber": "9876543210",
        "fcDetails": "Valid until 2028",
        "icDetails": "Policy #12345",
        "taxDetails": "Paid 2024",
        "workDescription": "Delivery",
        "createdAt": "2026-03-21T17:03:54.842Z",
        "updatedAt": "2026-03-21T17:03:54.842Z"
    },
    {
        "id": "69becf76ea3e5a4ffa1cd8bf",
        "vehicleNumber": "TN01QB0734",
        "vehicleClass": "Heavy Goods",
        "modelYear": 2024,
        "username": "venkat_admin",
        "natureOfWork": "Logistics",
        "ownerAddress": "123 Street, City",
        "phoneNumber": "9876543210",
        "fcDetails": "Valid until 2028",
        "icDetails": "Policy #12345",
        "taxDetails": "Paid 2024",
        "workDescription": "Delivery",
        "createdAt": "2026-03-21T17:03:50.686Z",
        "updatedAt": "2026-03-21T17:03:50.686Z"
    },
    {
        "id": "69becf6eea3e5a4ffa1cd8be",
        "vehicleNumber": "TN01QAB0734",
        "vehicleClass": "Heavy Goods",
        "modelYear": 2024,
        "username": "venkat_admin",
        "natureOfWork": "Logistics",
        "ownerAddress": "123 Street, City",
        "phoneNumber": "9876543210",
        "fcDetails": "Valid until 2028",
        "icDetails": "Policy #12345",
        "taxDetails": "Paid 2024",
        "workDescription": "Delivery",
        "createdAt": "2026-03-21T17:03:42.936Z",
        "updatedAt": "2026-03-21T17:03:42.936Z"
    },
    {
        "id": "69becf69ea3e5a4ffa1cd8bd",
        "vehicleNumber": "TN01AB0734",
        "vehicleClass": "Heavy Goods",
        "modelYear": 2024,
        "username": "venkat_admin",
        "natureOfWork": "Logistics",
        "ownerAddress": "123 Street, City",
        "phoneNumber": "9876543210",
        "fcDetails": "Valid until 2028",
        "icDetails": "Policy #12345",
        "taxDetails": "Paid 2024",
        "workDescription": "Delivery",
        "createdAt": "2026-03-21T17:03:37.844Z",
        "updatedAt": "2026-03-21T17:03:37.844Z"
    },
    {
        "id": "69be7d638b6fafdc346ad3bc",
        "vehicleNumber": "TN01AB0934",
        "vehicleClass": "Heavy Goods",
        "modelYear": 2024,
        "username": "venkat_admin",
        "natureOfWork": "Logistics",
        "ownerAddress": "123 Street, City",
        "phoneNumber": "9876543210",
        "fcDetails": "Valid until 2028",
        "icDetails": "Policy #12345",
        "taxDetails": "Paid 2024",
        "workDescription": "Delivery",
        "createdAt": "2026-03-21T11:13:39.015Z",
        "updatedAt": "2026-03-21T11:13:39.015Z"
    },
    {
        "id": "69be785f37b8d3f1efd9c23f",
        "vehicleNumber": "TN01AB0234",
        "vehicleClass": "Heavy Goods",
        "modelYear": 2024,
        "username": "venkat_admin",
        "natureOfWork": "Logistics",
        "ownerAddress": "123 Street, City",
        "phoneNumber": "9876543210",
        "fcDetails": "Valid until 2028",
        "icDetails": "Policy #12345",
        "taxDetails": "Paid 2024",
        "workDescription": "Delivery",
        "createdAt": "2026-03-21T10:52:15.413Z",
        "updatedAt": "2026-03-21T10:52:15.413Z"
    },
    {
        "id": "69be77c6b7aa158708bb4ceb",
        "vehicleNumber": "TN01AB2234",
        "vehicleClass": "Heavy Goods",
        "modelYear": 2024,
        "username": "venkat_admin",
        "natureOfWork": "Logistics",
        "ownerAddress": "123 Street, City",
        "phoneNumber": "9876543210",
        "fcDetails": "Valid until 2028",
        "icDetails": "Policy #12345",
        "taxDetails": "Paid 2024",
        "workDescription": "Delivery",
        "createdAt": "2026-03-21T10:49:42.839Z",
        "updatedAt": "2026-03-21T10:49:42.839Z"
    },
    {
        "id": "69be76118314e7d3f6d4150a",
        "vehicleNumber": "TN01AB1234",
        "vehicleClass": "HGV",
        "modelYear": 2022,
        "username": "venkat_admin",
        "natureOfWork": "Logistics",
        "ownerAddress": "123 Main St, Chennai",
        "phoneNumber": "9876543210",
        "fcDetails": "Valid until 2027",
        "icDetails": "HDFC Ergo - 2025",
        "taxDetails": "Paid up to 2026",
        "workDescription": "Inter-state transport",
        "createdAt": "2026-03-21T10:42:25.106Z",
        "updatedAt": "2026-03-21T10:42:25.106Z"
    }
]
  }
}
  return response.data;
};