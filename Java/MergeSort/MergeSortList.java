import java.util.ArrayList;


public class MergeSortList {
    ArrayList<Integer> list = null;

    public MergeSortList(ArrayList<Integer> l){
        this.list = l;
    }

    public void sort(){
        this.list =  mergesort(this.list);
    }

		public ArrayList<Integer> getList(){
			return this.list;
		}

    private ArrayList<Integer> mergesort(ArrayList<Integer> a){
        if(a.size() <= 1){
            return a;
        }
        ArrayList<Integer> l1 = new ArrayList<>(a.subList(0, a.size() / 2));
        ArrayList<Integer> l2 = new ArrayList<>(a.subList(a.size() / 2, a.size()));

        l1 = mergesort(l1);
        l2 = mergesort(l2);

        return merge(l1, l2);
    }

    private ArrayList<Integer> merge(ArrayList<Integer> a, ArrayList<Integer> b){
        ArrayList<Integer> c = new ArrayList<>();

        while(!a.isEmpty() && !b.isEmpty()){
            if(a.get(0) > b.get(0)){
                c.add(b.get(0));
                b.remove(0);
            }
            else if(a.get(0) <= b.get(0)){
                c.add(a.get(0));
                a.remove(0);
            }
        }
        while(!a.isEmpty()){
            c.add(a.get(0));
            a.remove(0);
        }
        while(!b.isEmpty()){
            c.add(b.get(0));
            b.remove(0);
        }

        return c;
    }
}
