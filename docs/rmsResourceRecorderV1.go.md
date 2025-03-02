# `rmsResourceRecorderV1` Submodule <a name="`rmsResourceRecorderV1` Submodule" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RmsResourceRecorderV1 <a name="RmsResourceRecorderV1" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1 opentelekomcloud_rms_resource_recorder_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/rmsresourcerecorderv1"

rmsresourcerecorderv1.NewRmsResourceRecorderV1(scope Construct, id *string, config RmsResourceRecorderV1Config) RmsResourceRecorderV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config">RmsResourceRecorderV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config">RmsResourceRecorderV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putObsChannel">PutObsChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSmnChannel">PutSmnChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetObsChannel">ResetObsChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetSmnChannel">ResetSmnChannel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutObsChannel` <a name="PutObsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putObsChannel"></a>

```go
func PutObsChannel(value RmsResourceRecorderV1ObsChannel)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putObsChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

---

##### `PutSelector` <a name="PutSelector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSelector"></a>

```go
func PutSelector(value RmsResourceRecorderV1Selector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

---

##### `PutSmnChannel` <a name="PutSmnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSmnChannel"></a>

```go
func PutSmnChannel(value RmsResourceRecorderV1SmnChannel)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSmnChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetId"></a>

```go
func ResetId()
```

##### `ResetObsChannel` <a name="ResetObsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetObsChannel"></a>

```go
func ResetObsChannel()
```

##### `ResetSmnChannel` <a name="ResetSmnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetSmnChannel"></a>

```go
func ResetSmnChannel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RmsResourceRecorderV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/rmsresourcerecorderv1"

rmsresourcerecorderv1.RmsResourceRecorderV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/rmsresourcerecorderv1"

rmsresourcerecorderv1.RmsResourceRecorderV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/rmsresourcerecorderv1"

rmsresourcerecorderv1.RmsResourceRecorderV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/rmsresourcerecorderv1"

rmsresourcerecorderv1.RmsResourceRecorderV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RmsResourceRecorderV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RmsResourceRecorderV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RmsResourceRecorderV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RmsResourceRecorderV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.obsChannel">ObsChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference">RmsResourceRecorderV1ObsChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.retentionPeriod">RetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference">RmsResourceRecorderV1SelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.smnChannel">SmnChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference">RmsResourceRecorderV1SmnChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.agencyNameInput">AgencyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.obsChannelInput">ObsChannelInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.selectorInput">SelectorInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.smnChannelInput">SmnChannelInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.agencyName">AgencyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ObsChannel`<sup>Required</sup> <a name="ObsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.obsChannel"></a>

```go
func ObsChannel() RmsResourceRecorderV1ObsChannelOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference">RmsResourceRecorderV1ObsChannelOutputReference</a>

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.retentionPeriod"></a>

```go
func RetentionPeriod() *f64
```

- *Type:* *f64

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.selector"></a>

```go
func Selector() RmsResourceRecorderV1SelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference">RmsResourceRecorderV1SelectorOutputReference</a>

---

##### `SmnChannel`<sup>Required</sup> <a name="SmnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.smnChannel"></a>

```go
func SmnChannel() RmsResourceRecorderV1SmnChannelOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference">RmsResourceRecorderV1SmnChannelOutputReference</a>

---

##### `AgencyNameInput`<sup>Optional</sup> <a name="AgencyNameInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.agencyNameInput"></a>

```go
func AgencyNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ObsChannelInput`<sup>Optional</sup> <a name="ObsChannelInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.obsChannelInput"></a>

```go
func ObsChannelInput() RmsResourceRecorderV1ObsChannel
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.selectorInput"></a>

```go
func SelectorInput() RmsResourceRecorderV1Selector
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

---

##### `SmnChannelInput`<sup>Optional</sup> <a name="SmnChannelInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.smnChannelInput"></a>

```go
func SmnChannelInput() RmsResourceRecorderV1SmnChannel
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

---

##### `AgencyName`<sup>Required</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.agencyName"></a>

```go
func AgencyName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RmsResourceRecorderV1Config <a name="RmsResourceRecorderV1Config" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/rmsresourcerecorderv1"

&rmsresourcerecorderv1.RmsResourceRecorderV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AgencyName: *string,
	Selector: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.rmsResourceRecorderV1.RmsResourceRecorderV1Selector,
	Id: *string,
	ObsChannel: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel,
	SmnChannel: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.agencyName">AgencyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#agency_name RmsResourceRecorderV1#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#id RmsResourceRecorderV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.obsChannel">ObsChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a></code> | obs_channel block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.smnChannel">SmnChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a></code> | smn_channel block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgencyName`<sup>Required</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.agencyName"></a>

```go
AgencyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#agency_name RmsResourceRecorderV1#agency_name}.

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.selector"></a>

```go
Selector RmsResourceRecorderV1Selector
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#selector RmsResourceRecorderV1#selector}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#id RmsResourceRecorderV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ObsChannel`<sup>Optional</sup> <a name="ObsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.obsChannel"></a>

```go
ObsChannel RmsResourceRecorderV1ObsChannel
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

obs_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#obs_channel RmsResourceRecorderV1#obs_channel}

---

##### `SmnChannel`<sup>Optional</sup> <a name="SmnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.smnChannel"></a>

```go
SmnChannel RmsResourceRecorderV1SmnChannel
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

smn_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#smn_channel RmsResourceRecorderV1#smn_channel}

---

### RmsResourceRecorderV1ObsChannel <a name="RmsResourceRecorderV1ObsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/rmsresourcerecorderv1"

&rmsresourcerecorderv1.RmsResourceRecorderV1ObsChannel {
	Bucket: *string,
	Region: *string,
	BucketPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#bucket RmsResourceRecorderV1#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#region RmsResourceRecorderV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#bucket_prefix RmsResourceRecorderV1#bucket_prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#bucket RmsResourceRecorderV1#bucket}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#region RmsResourceRecorderV1#region}.

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.bucketPrefix"></a>

```go
BucketPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#bucket_prefix RmsResourceRecorderV1#bucket_prefix}.

---

### RmsResourceRecorderV1Selector <a name="RmsResourceRecorderV1Selector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/rmsresourcerecorderv1"

&rmsresourcerecorderv1.RmsResourceRecorderV1Selector {
	AllSupported: interface{},
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.property.allSupported">AllSupported</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#all_supported RmsResourceRecorderV1#all_supported}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#resource_types RmsResourceRecorderV1#resource_types}. |

---

##### `AllSupported`<sup>Required</sup> <a name="AllSupported" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.property.allSupported"></a>

```go
AllSupported interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#all_supported RmsResourceRecorderV1#all_supported}.

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#resource_types RmsResourceRecorderV1#resource_types}.

---

### RmsResourceRecorderV1SmnChannel <a name="RmsResourceRecorderV1SmnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/rmsresourcerecorderv1"

&rmsresourcerecorderv1.RmsResourceRecorderV1SmnChannel {
	TopicUrn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel.property.topicUrn">TopicUrn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#topic_urn RmsResourceRecorderV1#topic_urn}. |

---

##### `TopicUrn`<sup>Required</sup> <a name="TopicUrn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel.property.topicUrn"></a>

```go
TopicUrn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/rms_resource_recorder_v1#topic_urn RmsResourceRecorderV1#topic_urn}.

---

## Classes <a name="Classes" id="Classes"></a>

### RmsResourceRecorderV1ObsChannelOutputReference <a name="RmsResourceRecorderV1ObsChannelOutputReference" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/rmsresourcerecorderv1"

rmsresourcerecorderv1.NewRmsResourceRecorderV1ObsChannelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RmsResourceRecorderV1ObsChannelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resetBucketPrefix"></a>

```go
func ResetBucketPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketPrefixInput"></a>

```go
func BucketPrefixInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketPrefix"></a>

```go
func BucketPrefix() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.internalValue"></a>

```go
func InternalValue() RmsResourceRecorderV1ObsChannel
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

---


### RmsResourceRecorderV1SelectorOutputReference <a name="RmsResourceRecorderV1SelectorOutputReference" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/rmsresourcerecorderv1"

rmsresourcerecorderv1.NewRmsResourceRecorderV1SelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RmsResourceRecorderV1SelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resetResourceTypes"></a>

```go
func ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.allSupportedInput">AllSupportedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.allSupported">AllSupported</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllSupportedInput`<sup>Optional</sup> <a name="AllSupportedInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.allSupportedInput"></a>

```go
func AllSupportedInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllSupported`<sup>Required</sup> <a name="AllSupported" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.allSupported"></a>

```go
func AllSupported() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() RmsResourceRecorderV1Selector
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

---


### RmsResourceRecorderV1SmnChannelOutputReference <a name="RmsResourceRecorderV1SmnChannelOutputReference" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/rmsresourcerecorderv1"

rmsresourcerecorderv1.NewRmsResourceRecorderV1SmnChannelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RmsResourceRecorderV1SmnChannelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.topicUrnInput">TopicUrnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.topicUrn">TopicUrn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TopicUrnInput`<sup>Optional</sup> <a name="TopicUrnInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.topicUrnInput"></a>

```go
func TopicUrnInput() *string
```

- *Type:* *string

---

##### `TopicUrn`<sup>Required</sup> <a name="TopicUrn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.topicUrn"></a>

```go
func TopicUrn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.internalValue"></a>

```go
func InternalValue() RmsResourceRecorderV1SmnChannel
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

---



