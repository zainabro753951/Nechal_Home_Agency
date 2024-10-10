async function deleteProduct(id) {
  let deletedData = await fetch(`/deleteProducts/${id}`, {
    method: "delete",
  });
  if (deletedData.ok) {
    location.reload();
  }
}
