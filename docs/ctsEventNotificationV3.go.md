# `ctsEventNotificationV3` Submodule <a name="`ctsEventNotificationV3` Submodule" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CtsEventNotificationV3 <a name="CtsEventNotificationV3" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3 opentelekomcloud_cts_event_notification_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ctseventnotificationv3"

ctseventnotificationv3.NewCtsEventNotificationV3(scope Construct, id *string, config CtsEventNotificationV3Config) CtsEventNotificationV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config">CtsEventNotificationV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config">CtsEventNotificationV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putNotifyUserList">PutNotifyUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetNotifyUserList">ResetNotifyUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetTopicId">ResetTopicId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putFilter"></a>

```go
func PutFilter(value CtsEventNotificationV3Filter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a>

---

##### `PutNotifyUserList` <a name="PutNotifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putNotifyUserList"></a>

```go
func PutNotifyUserList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putNotifyUserList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putOperations"></a>

```go
func PutOperations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putOperations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetId"></a>

```go
func ResetId()
```

##### `ResetNotifyUserList` <a name="ResetNotifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetNotifyUserList"></a>

```go
func ResetNotifyUserList()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetOperations"></a>

```go
func ResetOperations()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTopicId` <a name="ResetTopicId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetTopicId"></a>

```go
func ResetTopicId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CtsEventNotificationV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ctseventnotificationv3"

ctseventnotificationv3.CtsEventNotificationV3_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ctseventnotificationv3"

ctseventnotificationv3.CtsEventNotificationV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ctseventnotificationv3"

ctseventnotificationv3.CtsEventNotificationV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ctseventnotificationv3"

ctseventnotificationv3.CtsEventNotificationV3_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CtsEventNotificationV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CtsEventNotificationV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CtsEventNotificationV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CtsEventNotificationV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.createTime">CreateTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference">CtsEventNotificationV3FilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationId">NotificationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationType">NotificationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notifyUserList">NotifyUserList</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList">CtsEventNotificationV3NotifyUserListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList">CtsEventNotificationV3OperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationNameInput">NotificationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notifyUserListInput">NotifyUserListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationsInput">OperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationTypeInput">OperationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.topicIdInput">TopicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationName">NotificationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationType">OperationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.topicId">TopicId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.createTime"></a>

```go
func CreateTime() *f64
```

- *Type:* *f64

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.filter"></a>

```go
func Filter() CtsEventNotificationV3FilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference">CtsEventNotificationV3FilterOutputReference</a>

---

##### `NotificationId`<sup>Required</sup> <a name="NotificationId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationId"></a>

```go
func NotificationId() *string
```

- *Type:* *string

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationType"></a>

```go
func NotificationType() *string
```

- *Type:* *string

---

##### `NotifyUserList`<sup>Required</sup> <a name="NotifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notifyUserList"></a>

```go
func NotifyUserList() CtsEventNotificationV3NotifyUserListStructList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList">CtsEventNotificationV3NotifyUserListStructList</a>

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operations"></a>

```go
func Operations() CtsEventNotificationV3OperationsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList">CtsEventNotificationV3OperationsList</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.filterInput"></a>

```go
func FilterInput() CtsEventNotificationV3Filter
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NotificationNameInput`<sup>Optional</sup> <a name="NotificationNameInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationNameInput"></a>

```go
func NotificationNameInput() *string
```

- *Type:* *string

---

##### `NotifyUserListInput`<sup>Optional</sup> <a name="NotifyUserListInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notifyUserListInput"></a>

```go
func NotifyUserListInput() interface{}
```

- *Type:* interface{}

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationsInput"></a>

```go
func OperationsInput() interface{}
```

- *Type:* interface{}

---

##### `OperationTypeInput`<sup>Optional</sup> <a name="OperationTypeInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationTypeInput"></a>

```go
func OperationTypeInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TopicIdInput`<sup>Optional</sup> <a name="TopicIdInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.topicIdInput"></a>

```go
func TopicIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NotificationName`<sup>Required</sup> <a name="NotificationName" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationName"></a>

```go
func NotificationName() *string
```

- *Type:* *string

---

##### `OperationType`<sup>Required</sup> <a name="OperationType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationType"></a>

```go
func OperationType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.topicId"></a>

```go
func TopicId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CtsEventNotificationV3Config <a name="CtsEventNotificationV3Config" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ctseventnotificationv3"

&ctseventnotificationv3.CtsEventNotificationV3Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	NotificationName: *string,
	OperationType: *string,
	Filter: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.ctsEventNotificationV3.CtsEventNotificationV3Filter,
	Id: *string,
	NotifyUserList: interface{},
	Operations: interface{},
	Status: *string,
	TopicId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.notificationName">NotificationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#notification_name CtsEventNotificationV3#notification_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.operationType">OperationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#operation_type CtsEventNotificationV3#operation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#id CtsEventNotificationV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.notifyUserList">NotifyUserList</a></code> | <code>interface{}</code> | notify_user_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.operations">Operations</a></code> | <code>interface{}</code> | operations block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#status CtsEventNotificationV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.topicId">TopicId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#topic_id CtsEventNotificationV3#topic_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NotificationName`<sup>Required</sup> <a name="NotificationName" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.notificationName"></a>

```go
NotificationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#notification_name CtsEventNotificationV3#notification_name}.

---

##### `OperationType`<sup>Required</sup> <a name="OperationType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.operationType"></a>

```go
OperationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#operation_type CtsEventNotificationV3#operation_type}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.filter"></a>

```go
Filter CtsEventNotificationV3Filter
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#filter CtsEventNotificationV3#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#id CtsEventNotificationV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotifyUserList`<sup>Optional</sup> <a name="NotifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.notifyUserList"></a>

```go
NotifyUserList interface{}
```

- *Type:* interface{}

notify_user_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#notify_user_list CtsEventNotificationV3#notify_user_list}

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.operations"></a>

```go
Operations interface{}
```

- *Type:* interface{}

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#operations CtsEventNotificationV3#operations}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#status CtsEventNotificationV3#status}.

---

##### `TopicId`<sup>Optional</sup> <a name="TopicId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.topicId"></a>

```go
TopicId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#topic_id CtsEventNotificationV3#topic_id}.

---

### CtsEventNotificationV3Filter <a name="CtsEventNotificationV3Filter" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ctseventnotificationv3"

&ctseventnotificationv3.CtsEventNotificationV3Filter {
	Condition: *string,
	Rule: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#condition CtsEventNotificationV3#condition}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter.property.rule">Rule</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#rule CtsEventNotificationV3#rule}. |

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#condition CtsEventNotificationV3#condition}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter.property.rule"></a>

```go
Rule *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#rule CtsEventNotificationV3#rule}.

---

### CtsEventNotificationV3NotifyUserListStruct <a name="CtsEventNotificationV3NotifyUserListStruct" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ctseventnotificationv3"

&ctseventnotificationv3.CtsEventNotificationV3NotifyUserListStruct {
	UserGroup: *string,
	UserList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct.property.userGroup">UserGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#user_group CtsEventNotificationV3#user_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct.property.userList">UserList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#user_list CtsEventNotificationV3#user_list}. |

---

##### `UserGroup`<sup>Required</sup> <a name="UserGroup" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct.property.userGroup"></a>

```go
UserGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#user_group CtsEventNotificationV3#user_group}.

---

##### `UserList`<sup>Required</sup> <a name="UserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct.property.userList"></a>

```go
UserList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#user_list CtsEventNotificationV3#user_list}.

---

### CtsEventNotificationV3Operations <a name="CtsEventNotificationV3Operations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ctseventnotificationv3"

&ctseventnotificationv3.CtsEventNotificationV3Operations {
	ResourceType: *string,
	ServiceType: *string,
	TraceNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#resource_type CtsEventNotificationV3#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.serviceType">ServiceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#service_type CtsEventNotificationV3#service_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.traceNames">TraceNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#trace_names CtsEventNotificationV3#trace_names}. |

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#resource_type CtsEventNotificationV3#resource_type}.

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.serviceType"></a>

```go
ServiceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#service_type CtsEventNotificationV3#service_type}.

---

##### `TraceNames`<sup>Required</sup> <a name="TraceNames" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.traceNames"></a>

```go
TraceNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cts_event_notification_v3#trace_names CtsEventNotificationV3#trace_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### CtsEventNotificationV3FilterOutputReference <a name="CtsEventNotificationV3FilterOutputReference" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ctseventnotificationv3"

ctseventnotificationv3.NewCtsEventNotificationV3FilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CtsEventNotificationV3FilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.ruleInput">RuleInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.rule">Rule</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.ruleInput"></a>

```go
func RuleInput() *[]*string
```

- *Type:* *[]*string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.rule"></a>

```go
func Rule() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.internalValue"></a>

```go
func InternalValue() CtsEventNotificationV3Filter
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a>

---


### CtsEventNotificationV3NotifyUserListStructList <a name="CtsEventNotificationV3NotifyUserListStructList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ctseventnotificationv3"

ctseventnotificationv3.NewCtsEventNotificationV3NotifyUserListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CtsEventNotificationV3NotifyUserListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.get"></a>

```go
func Get(index *f64) CtsEventNotificationV3NotifyUserListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CtsEventNotificationV3NotifyUserListStructOutputReference <a name="CtsEventNotificationV3NotifyUserListStructOutputReference" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ctseventnotificationv3"

ctseventnotificationv3.NewCtsEventNotificationV3NotifyUserListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CtsEventNotificationV3NotifyUserListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userGroupInput">UserGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userListInput">UserListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userGroup">UserGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userList">UserList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UserGroupInput`<sup>Optional</sup> <a name="UserGroupInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userGroupInput"></a>

```go
func UserGroupInput() *string
```

- *Type:* *string

---

##### `UserListInput`<sup>Optional</sup> <a name="UserListInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userListInput"></a>

```go
func UserListInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserGroup`<sup>Required</sup> <a name="UserGroup" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userGroup"></a>

```go
func UserGroup() *string
```

- *Type:* *string

---

##### `UserList`<sup>Required</sup> <a name="UserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userList"></a>

```go
func UserList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CtsEventNotificationV3OperationsList <a name="CtsEventNotificationV3OperationsList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ctseventnotificationv3"

ctseventnotificationv3.NewCtsEventNotificationV3OperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CtsEventNotificationV3OperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.get"></a>

```go
func Get(index *f64) CtsEventNotificationV3OperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CtsEventNotificationV3OperationsOutputReference <a name="CtsEventNotificationV3OperationsOutputReference" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ctseventnotificationv3"

ctseventnotificationv3.NewCtsEventNotificationV3OperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CtsEventNotificationV3OperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.serviceTypeInput">ServiceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.traceNamesInput">TraceNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.traceNames">TraceNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `ServiceTypeInput`<sup>Optional</sup> <a name="ServiceTypeInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.serviceTypeInput"></a>

```go
func ServiceTypeInput() *string
```

- *Type:* *string

---

##### `TraceNamesInput`<sup>Optional</sup> <a name="TraceNamesInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.traceNamesInput"></a>

```go
func TraceNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `TraceNames`<sup>Required</sup> <a name="TraceNames" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.traceNames"></a>

```go
func TraceNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



