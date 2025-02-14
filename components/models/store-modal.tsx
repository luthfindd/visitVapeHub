'use client'

import * as z from 'zod'

import { useStoreModal } from "@/hooks/use-store-modal"
import Modal from "../ui/modal"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormLabel, FormItem, FormField, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const formSchema = z.object({
    name: z.string().min(1),
});

const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //TODO: Buat Toko
    console.log(values)
}

export const StoreModal = () => {
    const storeModal = useStoreModal();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: " ",
        },
    })

    return(
        <Modal
        tittle="Buat Store"
        description="Tambahkan Store Untuk Membuat Produk Dan Kategori"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}>
        
        <div>
            <div className='space-y-4 py-2 pb-4'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField 
                        control={form.control}
                        name='name'
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                    placeholder='Nama toko'
                                    {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
                            <Button
                            variant="outline"
                            onClick={storeModal.onClose}
                            >Cancel</Button>
                            <Button type="submit">Continue</Button>
                        </div>
                    </form>
                </Form>

            </div>
        </div>

        </Modal>
    )
}