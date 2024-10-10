import Heading from "@/components/Heading";
import getMyRooms from "@/app/actions/getMyRooms";
import MyRoomCard from "@/components/MyRoomCard";

const MyRoomsPage = async () => {
  const rooms = await getMyRooms();

  return (
    <>
      <Heading title="My Rooms" />
      {rooms.length > 0 ? (
        rooms.map((room) => <MyRoomCard key={room.$id} room={room} />)
      ) : (
        <p>No rooms found</p>
      )}
    </>
  );
};

export default MyRoomsPage;
