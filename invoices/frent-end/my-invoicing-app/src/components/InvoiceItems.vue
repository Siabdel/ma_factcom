<!-- src/components/Invoices.vue -->
<template>
  <div>
    <h1>Liste des factures</h1>
    <!-- ... Autres fonctionnalités ... -->

    <!-- Intégrer le composant Invoice -->
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name : "InvoiceItems", 
    data() {
    return {
      factures: [],
      // Autres données
    }
  },
  mounted() {
    //this.fetchClients()
  },
  methods: {
    async fetchClients() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/main_app/api/v1/clients/')
        this.factures = response.data
      } catch (error) {
        console.error('Error fetching clients:', error)
      }
    },
  }
};
</script>