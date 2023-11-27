import React from "react";

interface ModalDeleteItemProps {
    isOpen: boolean;
    item: any;
    onClose: () => void;
}

const ModalDeleteItem = ({ isOpen, item, onClose }: ModalDeleteItemProps) => {
    if (!isOpen) {
        return null;
    }

    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/items/${item.id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (data.error) {
                window.alert("Failed to delete item");
            } else {
                window.alert("Item deleted successfully");
            }
        } catch (error) {
            window.alert("An error occurred while deleting the item" + error);
        } finally {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto" >
            <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-xl">
                <div className="flex flex-col mb-4">
                    <h1
                        className="text-2xl font-bold text-black flex justify-center"
                        id="modal-title"
                    >
                        Konfirmasi Hapus Item
                    </h1>
                </div>
                <div className="flex justify-center">Apakah Anda yakin ingin menghapus item {item.nama}?</div>
                <div className="flex justify-between mt-10">
                    <button
                        className=" justify-center rounded-full border-[#B4ACAC] bg-white px-14 py-2 text-base font-semibold text-black ring-1 ring-inset ring-gray-300 hover:bg-[#dedcdc] sm:w-auto"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="justify-center rounded-full bg-[#B94545] px-14 py-2 text-base font-semibold text-white sm:w-auto "
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalDeleteItem;
