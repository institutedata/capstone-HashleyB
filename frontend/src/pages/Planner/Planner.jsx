import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "react-modal";
import axios from "axios";

const Planner = () => {
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    client: ""
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios.get("http://localhost:8080/training-session")
      .then(response => {
        const sessions = response.data.map(session => ({
          id: session._id,
          title: `Training with ${session.client.name}`,
          start: session.date,
          end: session.date,
          allDay: true,
          sessionData: session
        }));
        setEvents(sessions);
      })
      .catch(error => {
        console.error("Error fetching training sessions:", error);
      });
  };

  const handleEventClick = (clickInfo) => {
    setSelectedSession(clickInfo.event.sessionData);
    setModalType("update");
    setFormData({
      date: clickInfo.event.startStr,
      startTime: clickInfo.event.sessionData.startTime,
      endTime: clickInfo.event.sessionData.endTime,
      client: clickInfo.event.sessionData.client._id
    });
    setModalIsOpen(true);
  };

  const handleDateClick = (clickInfo) => {
    setModalType("create");
    setFormData({
      date: clickInfo.dateStr,
      startTime: "",
      endTime: "",
      client: ""
    });
    setModalIsOpen(true);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalType === "create") {
      axios.post("http://localhost:8080/training-session/book", formData)
        .then(() => {
          fetchEvents();
          setModalIsOpen(false);
          setFormData({
            date: "",
            startTime: "",
            endTime: "",
            client: ""
          });
        })
        .catch(error => {
          console.error("Error creating session:", error);
        });
    } else if (modalType === "update") {
      axios.put(`http://localhost:8080/training-session/${selectedSession._id}`, formData)
        .then(() => {
          fetchEvents();
          setModalIsOpen(false);
          setFormData({
            date: "",
            startTime: "",
            endTime: "",
            client: ""
          });
        })
        .catch(error => {
          console.error("Error updating session:", error);
        });
    }
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/training-session/${selectedSession._id}`)
      .then(() => {
        fetchEvents();
        setModalIsOpen(false);
        setFormData({
          date: "",
          startTime: "",
          endTime: "",
          client: ""
        });
      })
      .catch(error => {
        console.error("Error deleting session:", error);
      });
  };

  return (
    <div>
      <h2>Training Sessions Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        dateClick={handleDateClick}
      />
      <Modal isOpen={modalIsOpen}>
        <form onSubmit={handleSubmit}>
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleFormChange} required />
          <label>Start Time:</label>
          <input type="time" name="startTime" value={formData.startTime} onChange={handleFormChange} required />
          <label>End Time:</label>
          <input type="time" name="endTime" value={formData.endTime} onChange={handleFormChange} required />
          <label>Client</label>
          <input type="text" name="client" value={formData.client} onChange={handleFormChange} required />
          <button type="submit">Submit</button>
          {modalType === "update" && (
            <button type="button" onClick={handleDelete}>Delete</button>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default Planner;