import DetailsContent from "@/components/DetailsContent";
import Modal from "@/components/Modal";
import { getData } from "@/lib/dataJson";
import React from "react";

const MovieDetailsModal = async ({ params: { id } }) => {
  const data = await getData();

  const movie = data?.results?.find((movie) => movie?.id === parseInt(id));

  return (
    <Modal>
      <DetailsContent movie={movie} />
    </Modal>
  );
};

export default MovieDetailsModal;
