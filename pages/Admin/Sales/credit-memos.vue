<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-gift-memos"><input type="submit" class="btn btn-warning" value="Create New Gift Certificates"></a>
        
      </div>
    </nav>
    
    <br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Bill to Name</th>
            <th>Credit Memo</th>
            <th>Order Number</th>
            <th>Refund Amount</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="memos in allCredit_memosList" :key="memos.id">
          <tr>
            <td>{{ memos.bill_to_name }}</td>
            <td>{{ memos.credit_memo }}</td>
            <td>{{ memos.order_number }}</td>
            <td>{{ memos.refunded }}</td>
            <td>{{ memos.created }}</td>
            <td><a :href="`/admin/edit/memo/${memos.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import  allCredit_memosList from '~/apollo/queries/sales/credit_memos'

export default {
  data() {
    return {
      allCredit_memosList: [],
    }
  },
  apollo: {
    allCredit_memosList: {
      prefetch: true,
      query: allCredit_memosList
    }
  },
    head: {
      title: 'Credit Memos'
    }
  }

</script>
