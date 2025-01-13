'use client'

import { useStoreModal } from "@/hooks/use-store-modal"
import Modal from "../ui/modal"

export const storeModal = () => {
    const storeModal = useStoreModal();
    return(
        <Modal
        tittle="Buat Store"
        description="Tambahkan Store Untuk Membuat Produk Dan Kategori"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}>
            Store Form
        </Modal>
    )
}