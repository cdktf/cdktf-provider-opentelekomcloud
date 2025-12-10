# `dmsConsumerGroupV2` Submodule <a name="`dmsConsumerGroupV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsConsumerGroupV2 <a name="DmsConsumerGroupV2" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_consumer_group_v2 opentelekomcloud_dms_consumer_group_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsconsumergroupv2"

dmsconsumergroupv2.NewDmsConsumerGroupV2(scope Construct, id *string, config DmsConsumerGroupV2Config) DmsConsumerGroupV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config">DmsConsumerGroupV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config">DmsConsumerGroupV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DmsConsumerGroupV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsconsumergroupv2"

dmsconsumergroupv2.DmsConsumerGroupV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsconsumergroupv2"

dmsconsumergroupv2.DmsConsumerGroupV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsconsumergroupv2"

dmsconsumergroupv2.DmsConsumerGroupV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsconsumergroupv2"

dmsconsumergroupv2.DmsConsumerGroupV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DmsConsumerGroupV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DmsConsumerGroupV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DmsConsumerGroupV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_consumer_group_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DmsConsumerGroupV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.assignmentStrategy">AssignmentStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.coordinatorId">CoordinatorId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupMessageOffsets">GroupMessageOffsets</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList">DmsConsumerGroupV2GroupMessageOffsetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.members">Members</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList">DmsConsumerGroupV2MembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupNameInput">GroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssignmentStrategy`<sup>Required</sup> <a name="AssignmentStrategy" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.assignmentStrategy"></a>

```go
func AssignmentStrategy() *string
```

- *Type:* *string

---

##### `CoordinatorId`<sup>Required</sup> <a name="CoordinatorId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.coordinatorId"></a>

```go
func CoordinatorId() *f64
```

- *Type:* *f64

---

##### `GroupMessageOffsets`<sup>Required</sup> <a name="GroupMessageOffsets" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupMessageOffsets"></a>

```go
func GroupMessageOffsets() DmsConsumerGroupV2GroupMessageOffsetsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList">DmsConsumerGroupV2GroupMessageOffsetsList</a>

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.members"></a>

```go
func Members() DmsConsumerGroupV2MembersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList">DmsConsumerGroupV2MembersList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupNameInput"></a>

```go
func GroupNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsConsumerGroupV2Config <a name="DmsConsumerGroupV2Config" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsconsumergroupv2"

&dmsconsumergroupv2.DmsConsumerGroupV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupName: *string,
	InstanceId: *string,
	Description: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.groupName">GroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_consumer_group_v2#group_name DmsConsumerGroupV2#group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_consumer_group_v2#instance_id DmsConsumerGroupV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_consumer_group_v2#description DmsConsumerGroupV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_consumer_group_v2#id DmsConsumerGroupV2#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.groupName"></a>

```go
GroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_consumer_group_v2#group_name DmsConsumerGroupV2#group_name}.

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_consumer_group_v2#instance_id DmsConsumerGroupV2#instance_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_consumer_group_v2#description DmsConsumerGroupV2#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_consumer_group_v2#id DmsConsumerGroupV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DmsConsumerGroupV2GroupMessageOffsets <a name="DmsConsumerGroupV2GroupMessageOffsets" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsconsumergroupv2"

&dmsconsumergroupv2.DmsConsumerGroupV2GroupMessageOffsets {

}
```


### DmsConsumerGroupV2Members <a name="DmsConsumerGroupV2Members" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Members"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Members.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsconsumergroupv2"

&dmsconsumergroupv2.DmsConsumerGroupV2Members {

}
```


### DmsConsumerGroupV2MembersAssignments <a name="DmsConsumerGroupV2MembersAssignments" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsconsumergroupv2"

&dmsconsumergroupv2.DmsConsumerGroupV2MembersAssignments {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DmsConsumerGroupV2GroupMessageOffsetsList <a name="DmsConsumerGroupV2GroupMessageOffsetsList" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsconsumergroupv2"

dmsconsumergroupv2.NewDmsConsumerGroupV2GroupMessageOffsetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsConsumerGroupV2GroupMessageOffsetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.get"></a>

```go
func Get(index *f64) DmsConsumerGroupV2GroupMessageOffsetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DmsConsumerGroupV2GroupMessageOffsetsOutputReference <a name="DmsConsumerGroupV2GroupMessageOffsetsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsconsumergroupv2"

dmsconsumergroupv2.NewDmsConsumerGroupV2GroupMessageOffsetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsConsumerGroupV2GroupMessageOffsetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.lag">Lag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.messageCurrentOffset">MessageCurrentOffset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.messageLogEndOffset">MessageLogEndOffset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.partition">Partition</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets">DmsConsumerGroupV2GroupMessageOffsets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Lag`<sup>Required</sup> <a name="Lag" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.lag"></a>

```go
func Lag() *f64
```

- *Type:* *f64

---

##### `MessageCurrentOffset`<sup>Required</sup> <a name="MessageCurrentOffset" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.messageCurrentOffset"></a>

```go
func MessageCurrentOffset() *f64
```

- *Type:* *f64

---

##### `MessageLogEndOffset`<sup>Required</sup> <a name="MessageLogEndOffset" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.messageLogEndOffset"></a>

```go
func MessageLogEndOffset() *f64
```

- *Type:* *f64

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.partition"></a>

```go
func Partition() *f64
```

- *Type:* *f64

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DmsConsumerGroupV2GroupMessageOffsets
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets">DmsConsumerGroupV2GroupMessageOffsets</a>

---


### DmsConsumerGroupV2MembersAssignmentsList <a name="DmsConsumerGroupV2MembersAssignmentsList" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsconsumergroupv2"

dmsconsumergroupv2.NewDmsConsumerGroupV2MembersAssignmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsConsumerGroupV2MembersAssignmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.get"></a>

```go
func Get(index *f64) DmsConsumerGroupV2MembersAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DmsConsumerGroupV2MembersAssignmentsOutputReference <a name="DmsConsumerGroupV2MembersAssignmentsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsconsumergroupv2"

dmsconsumergroupv2.NewDmsConsumerGroupV2MembersAssignmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsConsumerGroupV2MembersAssignmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.partitions">Partitions</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments">DmsConsumerGroupV2MembersAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Partitions`<sup>Required</sup> <a name="Partitions" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.partitions"></a>

```go
func Partitions() *[]*f64
```

- *Type:* *[]*f64

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DmsConsumerGroupV2MembersAssignments
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments">DmsConsumerGroupV2MembersAssignments</a>

---


### DmsConsumerGroupV2MembersList <a name="DmsConsumerGroupV2MembersList" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsconsumergroupv2"

dmsconsumergroupv2.NewDmsConsumerGroupV2MembersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsConsumerGroupV2MembersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.get"></a>

```go
func Get(index *f64) DmsConsumerGroupV2MembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DmsConsumerGroupV2MembersOutputReference <a name="DmsConsumerGroupV2MembersOutputReference" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsconsumergroupv2"

dmsconsumergroupv2.NewDmsConsumerGroupV2MembersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsConsumerGroupV2MembersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.assignments">Assignments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList">DmsConsumerGroupV2MembersAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.memberId">MemberId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Members">DmsConsumerGroupV2Members</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Assignments`<sup>Required</sup> <a name="Assignments" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.assignments"></a>

```go
func Assignments() DmsConsumerGroupV2MembersAssignmentsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList">DmsConsumerGroupV2MembersAssignmentsList</a>

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.memberId"></a>

```go
func MemberId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.internalValue"></a>

```go
func InternalValue() DmsConsumerGroupV2Members
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Members">DmsConsumerGroupV2Members</a>

---



