// order store with pinia
import { defineStore } from 'pinia'
import axiosInstance from '@/boot/axios'
import notify from '@/boot/notify'

export const useOrderStore = defineStore({
  id: 'order',
  state: () => ({
    data: [],
    dataDetail: {},
    dataOrder: [],
    dialogImage: false,
    idActive: null,
  }),
  actions: {
    async getAll() {
      try {
        const response = await axiosInstance.get('/order')
        if (response.data.status) {
          this.data = response.data.data.map((order, index) => ({
            ...order,
            no: index + 1
          }))
          console.log('this.data order', this.data);
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // get order by id user
    async getByIdUser(id) {
      try {
        const response = await axiosInstance.get(`/order/${id}`)
        if (response.data.status) {
          this.dataOrder = response.data.data
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // create order
    async create(payload) {
      console.log('payload', payload);
      try {
        const response = await axiosInstance.post('/order', payload)
        if (response.data.status) {
          const responseDelete = await axiosInstance.delete(`/cart/${payload.id_order}`)
          if (responseDelete.data.status) {
            console.log('berhasil delete cart');
          }
          const snapToken = response.data.data.snapToken
          window.snap.pay(snapToken, {
            onSuccess: async (result) => {
              this.update(result)
              console.log('sukses', result);
            },
            onPending: (result) => {
              console.log('pending', result);
            },
            onError: (result) => {
              console.log('error', result);
            },
            onClose: () => {
              console.log('close');
            }
          })
        }

      } catch (error) {
        console.error('error', error);
      }
    },

    // update order
    async update(payload) {
      console.log('payload', payload);
      try {
        const response = await axiosInstance.put(`/order/${payload.order_id}`, {
          order_status: payload.status_message,
          payment_type: payload.payment_type
        })
        console.log('response', response);
      } catch (error) {
        console.error('error', error);
      }
    },

    async delete(id) {
      try {
        const response = await axiosInstance.delete(`/order/${id}`)
        if (response.data.status) {
          notify.success(response.data.message)
          this.dataOrder = this.dataOrder.filter(order => order.id !== id);
        }
      } catch (error) {
        console.error('error', error);
      }
    }
  }
})

export default useOrderStore
