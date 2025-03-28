# Workout API

Ett enkelt REST API för att hantera träningspass (workouts) med CRUD-funktionalitet.

## Installation

1. Klona repot:
   git clone https://github.com/elFarfar/u05-API.git

2. Installera beroenden: 
npm install

3. Skapa `.env`-fil och lägg till din MongoDB URI:
MONGO_URI=mongodb+srv://dbUser:yourpassword@cluster.mongodb.net/workouts?retryWrites=true&w=majority

4. Starta servern:
npm start

## API Endpoints

| Method | Endpoint       | Description |
|--------|---------------|-------------|
| GET    | `/api/workouts`   | Hämta alla workouts |
| GET    | `/api/workouts/:id` | Hämta en specifik workout |
| POST   | `/api/workouts`   | Skapa en ny workout |
| PUT    | `/api/workouts/:id` | Uppdatera en workout |
| DELETE | `/api/workouts/:id` | Ta bort en workout |

### Exempelanrop med cURL

#### Skapa en workout
```sh
curl -X POST http://localhost:5000/api/workouts \
  -H "Content-Type: application/json" \
  -d '{
        "workoutType": "Cardio",
        "duration": 45,
        "focus": "Endurance",
        "goal": "Weight Loss"
      }'

- Hämta alla workouts

curl -X GET http://localhost:5000/api/workouts

- Uppdatera en workout
curl -X PUT http://localhost:5000/api/workouts/WORKOUT_ID \
     -H "Content-Type: application/json" \
     -d '{
           "workoutType": "Strength Training",
           "duration": 60,
           "focus": "Muscle Gain",
           "goal": "Bulk Up"
         }'
- Ta bort en workout

curl -X DELETE http://localhost:5000/api/workouts/WORKOUT_ID