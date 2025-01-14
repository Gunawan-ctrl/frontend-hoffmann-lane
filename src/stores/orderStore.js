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
          console.log('this.data', this.data);
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
      try {
        const response = await axiosInstance.post('/order', payload)
        console.log('response', response);
      } catch (error) {
        console.error('error', error);
      }
    },

    // update order
    async update(payload) {
      console.log('payload', payload);
      try {
        await axiosInstance.put(`/order/${payload.id}`, payload)
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
