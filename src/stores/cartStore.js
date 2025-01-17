// cart store with pinia
import { defineStore } from 'pinia'
import axiosInstance from '@/boot/axios'
// import notify from '@/boot/notify'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    data: [],
    dataDetail: {},
    dataCart: [],
    dialogImage: false,
    idActive: null,
  }),
  actions: {
    async getAll() {
      try {
        const response = await axiosInstance.get('/cart')
        if (response.data.status) {
          this.data = response.data.data.map((cart, index) => ({
            ...cart,
            no: index + 1
          }))
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    async getByIdUser(id) {
      try {
        const response = await axiosInstance.get(`/cart/${id}`)
        if (response.data.status) {
          this.dataCart = response.data.data
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    async create(payload) {
      try {
        await axiosInstance.post('/cart', payload)
      } catch (error) {
        console.error('error', error);
      }
    },

    async update(payload) {
      console.log('payload', payload);
      try {
        await axiosInstance.put(`/cart/${payload.id}`, payload)
      } catch (error) {
        console.error('error', error);
      }
    },

    async delete(id) {
      try {
        await axiosInstance.delete(`/cart/${id}`)
      } catch (error) {
        console.error('error', error);
      }
    },
  }
})

export default useCartStore
