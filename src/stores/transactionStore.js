// transaction store with pinia
import { defineStore } from 'pinia'
import axiosInstance from '@/boot/axios'
import notify from '@/boot/notify'

export const useTransactionStore = defineStore({
  id: 'transaction',
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
        const response = await axiosInstance.get('/transaction')
        console.log('response', response);
        if (response.data.status) {
          this.data = response.data.data.map((transaction, index) => ({
            ...transaction,
            no: index + 1
          }))
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    async getByIdUser(id) {
      try {
        const response = await axiosInstance.get(`/transaction/${id}`)
        if (response.data.status) {
          this.dataOrder = response.data.data
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    async create(payload) {
      console.log('payload', payload);
      try {
        const response = await axiosInstance.post('/transaction', payload)
        if (response.data.status) {
          const snapToken = response.data.data.snapToken
          window.snap.pay(snapToken, {
            onSuccess: async (result) => {
              console.log('success', result);
              notify.success('Transaction Success');
            },
            onPending: (result) => {
              console.log('pending', result);
              notify.warning('Transaction Pending');
            },
            onError: (result) => {
              console.log('error', result);
              notify.error('Transaction Error');
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

    async update(payload) {
      try {
        const response = await axiosInstance.put(`/transaction/${payload.order_id}`, {
          status: payload.transaction_status,
          payment_type: payload.payment_type
        })
        console.log('response', response);
      } catch (error) {
        console.error('error', error);
      }
    },

    async deleteOrder(id) {
      console.log('id', id);
      try {
        const response = await axiosInstance.delete(`/order/${id}`)
        if (response.data.status) {
          notify.success(response.data.message)
          this.dataOrder = this.dataOrder.filter(transaction => transaction.id !== id);
        }
      } catch (error) {
        console.error('error', error);
      }
    }
  }
})
