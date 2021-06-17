package edu.principia.cstaley;
import java.util.LinkedList;
import org.apache.commons.collections4.list.PredicatedList;

public class App 
{
    public static void main( String[] args )
    {
        LinkedList<String> myList = new LinkedList<String>();
        PredicatedList<String> posList = PredicatedList.predicatedList
         (myList, s -> s.length() > 0);

        posList.add("Hello"); 
        posList.add("World");

        for (String x: posList)
           System.out.println(x);
    }
}
