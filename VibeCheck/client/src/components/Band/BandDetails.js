





const handleDelete = () => {
    deleteBand(band.id).then(history.push("/band")).then(updateList())
  };

  const handleEdit = () => {
    history.push(`/band/form/${band.id}`);
  };