# Restrictions
Restrictions can be added to commands, modules or the entire guild. They allow for the most flexibility in defining which commands users can execute and where they can execute them

## Restriction Fields
![An image of two restrictions](/images/restrictions.jpg)

* A restriction field will consist of several `restriction` cards and an `Add Restriction` field. 
* All the restrictions here will be checked to see if the user can run a command - in this example, the user would need both the ban and kick permission (provided by the `can.ban` and `can.kick` restrictions respectively)

## Adding a Restriction
![An image of adding a restriction](/images/add-restriction.jpg)

* To add a new restriction to the list, you can either select an existing one by using the dropdown box or creating a new one by entering a new name.
* By default, there should be at least one restriction by default - `bot.admin` is used by default to restrict who can access the admin panel, and can be selected here.

## Configuring a Restriction
![A labelled image of an individual restriction](/images/restriction.jpg)

* Each restriction will consist of one or more **paths** (the lighter grey areas). These are an `OR` condition - only one of these needs to be met for the restriction to pass
  *	 Additional restrictions can be added using the plus button highlighted in *pink*
* Each path will consist of one or more **conditions** (rows). These are an `AND` condition - all of these needs to be met for the restriction to pass
  * Additional conditions can be added using the plus buttons highlighted in *orange*
  * Conditions can be removed using the cross buttons on the right of the condition
* Conditions have the following options:
  * Type (*blue*):
    * **Permission** - checks that the user has a certain Discord permission
    * **Role** - checks that the user has a certain role
    * **Channel** - checks that the command is being executed in a certain channel or category
    * **User** - checks for a specific user
  * Option (*green*) - either a dropdown box (permission/role/channel) or search field (user) that reflects the condition type
  * Invert (*red*) - will invert the check (e.g. only pass if the channel is **not** `general`)