import Form from "../../componets/Forn";
import Header from "../../componets/Header";

export default function Admin() {
  return (
    <>
      <div className="w-full min-h-screen  flex flex-col items-center  pb-7 px-2">
        <Header />

        <Form />
      </div>
    </>
  );
}
