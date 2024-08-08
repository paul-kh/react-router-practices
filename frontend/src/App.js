import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import NewEventPage from "./pages/NewEvent";
import EventDetailPage from "./pages/EventDetail";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./components/Root";
import EventsRootLayout from "./components/EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          // FETCHING DATA WITH 'loader()'
          // react-router executes `loader()` when about to visit the path '/events'
          // `loader()` gets executed before the <EventPage> gets rendered
          {
            index: true,
            element: <EventsPage />,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");

              if (!response.ok) {
                // to deal with incorrect response
              } else {
                const resData = await response.json();
                // react makes the below returned 'resData' available
                // through out <EventsPage>  and other components as needed
                return resData.events;
              }
            },
          },
          { path: ":eventId", element: <EventDetailPage /> },

          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
