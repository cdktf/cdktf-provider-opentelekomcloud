# `disDumpTaskV2` Submodule <a name="`disDumpTaskV2` Submodule" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisDumpTaskV2 <a name="DisDumpTaskV2" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2 opentelekomcloud_dis_dump_task_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

disdumptaskv2.NewDisDumpTaskV2(scope Construct, id *string, config DisDumpTaskV2Config) DisDumpTaskV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config">DisDumpTaskV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config">DisDumpTaskV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putObsDestinationDescriptor">PutObsDestinationDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putObsProcessingSchema">PutObsProcessingSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetObsDestinationDescriptor">ResetObsDestinationDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetObsProcessingSchema">ResetObsProcessingSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutObsDestinationDescriptor` <a name="PutObsDestinationDescriptor" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putObsDestinationDescriptor"></a>

```go
func PutObsDestinationDescriptor(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putObsDestinationDescriptor.parameter.value"></a>

- *Type:* interface{}

---

##### `PutObsProcessingSchema` <a name="PutObsProcessingSchema" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putObsProcessingSchema"></a>

```go
func PutObsProcessingSchema(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putObsProcessingSchema.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putTimeouts"></a>

```go
func PutTimeouts(value DisDumpTaskV2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts">DisDumpTaskV2Timeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetAction"></a>

```go
func ResetAction()
```

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetId"></a>

```go
func ResetId()
```

##### `ResetObsDestinationDescriptor` <a name="ResetObsDestinationDescriptor" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetObsDestinationDescriptor"></a>

```go
func ResetObsDestinationDescriptor()
```

##### `ResetObsProcessingSchema` <a name="ResetObsProcessingSchema" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetObsProcessingSchema"></a>

```go
func ResetObsProcessingSchema()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DisDumpTaskV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

disdumptaskv2.DisDumpTaskV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

disdumptaskv2.DisDumpTaskV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

disdumptaskv2.DisDumpTaskV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

disdumptaskv2.DisDumpTaskV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DisDumpTaskV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DisDumpTaskV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DisDumpTaskV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DisDumpTaskV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.lastTransferTimestamp">LastTransferTimestamp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.obsDestinationDescriptor">ObsDestinationDescriptor</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList">DisDumpTaskV2ObsDestinationDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.obsProcessingSchema">ObsProcessingSchema</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList">DisDumpTaskV2ObsProcessingSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.partitions">Partitions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList">DisDumpTaskV2PartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.taskId">TaskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference">DisDumpTaskV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.obsDestinationDescriptorInput">ObsDestinationDescriptorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.obsProcessingSchemaInput">ObsProcessingSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.streamNameInput">StreamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `LastTransferTimestamp`<sup>Required</sup> <a name="LastTransferTimestamp" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.lastTransferTimestamp"></a>

```go
func LastTransferTimestamp() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObsDestinationDescriptor`<sup>Required</sup> <a name="ObsDestinationDescriptor" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.obsDestinationDescriptor"></a>

```go
func ObsDestinationDescriptor() DisDumpTaskV2ObsDestinationDescriptorList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList">DisDumpTaskV2ObsDestinationDescriptorList</a>

---

##### `ObsProcessingSchema`<sup>Required</sup> <a name="ObsProcessingSchema" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.obsProcessingSchema"></a>

```go
func ObsProcessingSchema() DisDumpTaskV2ObsProcessingSchemaList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList">DisDumpTaskV2ObsProcessingSchemaList</a>

---

##### `Partitions`<sup>Required</sup> <a name="Partitions" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.partitions"></a>

```go
func Partitions() DisDumpTaskV2PartitionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList">DisDumpTaskV2PartitionsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TaskId`<sup>Required</sup> <a name="TaskId" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.taskId"></a>

```go
func TaskId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.timeouts"></a>

```go
func Timeouts() DisDumpTaskV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference">DisDumpTaskV2TimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ObsDestinationDescriptorInput`<sup>Optional</sup> <a name="ObsDestinationDescriptorInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.obsDestinationDescriptorInput"></a>

```go
func ObsDestinationDescriptorInput() interface{}
```

- *Type:* interface{}

---

##### `ObsProcessingSchemaInput`<sup>Optional</sup> <a name="ObsProcessingSchemaInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.obsProcessingSchemaInput"></a>

```go
func ObsProcessingSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.streamNameInput"></a>

```go
func StreamNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DisDumpTaskV2Config <a name="DisDumpTaskV2Config" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

&disdumptaskv2.DisDumpTaskV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StreamName: *string,
	Action: *string,
	Destination: *string,
	Id: *string,
	ObsDestinationDescriptor: interface{},
	ObsProcessingSchema: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.disDumpTaskV2.DisDumpTaskV2Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.streamName">StreamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#stream_name DisDumpTaskV2#stream_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#action DisDumpTaskV2#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#destination DisDumpTaskV2#destination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#id DisDumpTaskV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.obsDestinationDescriptor">ObsDestinationDescriptor</a></code> | <code>interface{}</code> | obs_destination_descriptor block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.obsProcessingSchema">ObsProcessingSchema</a></code> | <code>interface{}</code> | obs_processing_schema block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts">DisDumpTaskV2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.streamName"></a>

```go
StreamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#stream_name DisDumpTaskV2#stream_name}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#action DisDumpTaskV2#action}.

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#destination DisDumpTaskV2#destination}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#id DisDumpTaskV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ObsDestinationDescriptor`<sup>Optional</sup> <a name="ObsDestinationDescriptor" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.obsDestinationDescriptor"></a>

```go
ObsDestinationDescriptor interface{}
```

- *Type:* interface{}

obs_destination_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#obs_destination_descriptor DisDumpTaskV2#obs_destination_descriptor}

---

##### `ObsProcessingSchema`<sup>Optional</sup> <a name="ObsProcessingSchema" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.obsProcessingSchema"></a>

```go
ObsProcessingSchema interface{}
```

- *Type:* interface{}

obs_processing_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#obs_processing_schema DisDumpTaskV2#obs_processing_schema}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Config.property.timeouts"></a>

```go
Timeouts DisDumpTaskV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts">DisDumpTaskV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#timeouts DisDumpTaskV2#timeouts}

---

### DisDumpTaskV2ObsDestinationDescriptor <a name="DisDumpTaskV2ObsDestinationDescriptor" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

&disdumptaskv2.DisDumpTaskV2ObsDestinationDescriptor {
	AgencyName: *string,
	DeliverTimeInterval: *f64,
	ObsBucketPath: *string,
	TaskName: *string,
	ConsumerStrategy: *string,
	DestinationFileType: *string,
	FilePrefix: *string,
	PartitionFormat: *string,
	RecordDelimiter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.agencyName">AgencyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#agency_name DisDumpTaskV2#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.deliverTimeInterval">DeliverTimeInterval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#deliver_time_interval DisDumpTaskV2#deliver_time_interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.obsBucketPath">ObsBucketPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#obs_bucket_path DisDumpTaskV2#obs_bucket_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.taskName">TaskName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#task_name DisDumpTaskV2#task_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.consumerStrategy">ConsumerStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#consumer_strategy DisDumpTaskV2#consumer_strategy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.destinationFileType">DestinationFileType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#destination_file_type DisDumpTaskV2#destination_file_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.filePrefix">FilePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#file_prefix DisDumpTaskV2#file_prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.partitionFormat">PartitionFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#partition_format DisDumpTaskV2#partition_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#record_delimiter DisDumpTaskV2#record_delimiter}. |

---

##### `AgencyName`<sup>Required</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.agencyName"></a>

```go
AgencyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#agency_name DisDumpTaskV2#agency_name}.

---

##### `DeliverTimeInterval`<sup>Required</sup> <a name="DeliverTimeInterval" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.deliverTimeInterval"></a>

```go
DeliverTimeInterval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#deliver_time_interval DisDumpTaskV2#deliver_time_interval}.

---

##### `ObsBucketPath`<sup>Required</sup> <a name="ObsBucketPath" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.obsBucketPath"></a>

```go
ObsBucketPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#obs_bucket_path DisDumpTaskV2#obs_bucket_path}.

---

##### `TaskName`<sup>Required</sup> <a name="TaskName" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.taskName"></a>

```go
TaskName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#task_name DisDumpTaskV2#task_name}.

---

##### `ConsumerStrategy`<sup>Optional</sup> <a name="ConsumerStrategy" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.consumerStrategy"></a>

```go
ConsumerStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#consumer_strategy DisDumpTaskV2#consumer_strategy}.

---

##### `DestinationFileType`<sup>Optional</sup> <a name="DestinationFileType" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.destinationFileType"></a>

```go
DestinationFileType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#destination_file_type DisDumpTaskV2#destination_file_type}.

---

##### `FilePrefix`<sup>Optional</sup> <a name="FilePrefix" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.filePrefix"></a>

```go
FilePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#file_prefix DisDumpTaskV2#file_prefix}.

---

##### `PartitionFormat`<sup>Optional</sup> <a name="PartitionFormat" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.partitionFormat"></a>

```go
PartitionFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#partition_format DisDumpTaskV2#partition_format}.

---

##### `RecordDelimiter`<sup>Optional</sup> <a name="RecordDelimiter" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptor.property.recordDelimiter"></a>

```go
RecordDelimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#record_delimiter DisDumpTaskV2#record_delimiter}.

---

### DisDumpTaskV2ObsProcessingSchema <a name="DisDumpTaskV2ObsProcessingSchema" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

&disdumptaskv2.DisDumpTaskV2ObsProcessingSchema {
	TimestampName: *string,
	TimestampType: *string,
	TimestampFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema.property.timestampName">TimestampName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#timestamp_name DisDumpTaskV2#timestamp_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema.property.timestampType">TimestampType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#timestamp_type DisDumpTaskV2#timestamp_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#timestamp_format DisDumpTaskV2#timestamp_format}. |

---

##### `TimestampName`<sup>Required</sup> <a name="TimestampName" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema.property.timestampName"></a>

```go
TimestampName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#timestamp_name DisDumpTaskV2#timestamp_name}.

---

##### `TimestampType`<sup>Required</sup> <a name="TimestampType" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema.property.timestampType"></a>

```go
TimestampType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#timestamp_type DisDumpTaskV2#timestamp_type}.

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchema.property.timestampFormat"></a>

```go
TimestampFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#timestamp_format DisDumpTaskV2#timestamp_format}.

---

### DisDumpTaskV2Partitions <a name="DisDumpTaskV2Partitions" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Partitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Partitions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

&disdumptaskv2.DisDumpTaskV2Partitions {

}
```


### DisDumpTaskV2Timeouts <a name="DisDumpTaskV2Timeouts" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

&disdumptaskv2.DisDumpTaskV2Timeouts {
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#update DisDumpTaskV2#update}. |

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/dis_dump_task_v2#update DisDumpTaskV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisDumpTaskV2ObsDestinationDescriptorList <a name="DisDumpTaskV2ObsDestinationDescriptorList" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

disdumptaskv2.NewDisDumpTaskV2ObsDestinationDescriptorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DisDumpTaskV2ObsDestinationDescriptorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.get"></a>

```go
func Get(index *f64) DisDumpTaskV2ObsDestinationDescriptorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DisDumpTaskV2ObsDestinationDescriptorOutputReference <a name="DisDumpTaskV2ObsDestinationDescriptorOutputReference" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

disdumptaskv2.NewDisDumpTaskV2ObsDestinationDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DisDumpTaskV2ObsDestinationDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetConsumerStrategy">ResetConsumerStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetDestinationFileType">ResetDestinationFileType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetFilePrefix">ResetFilePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetPartitionFormat">ResetPartitionFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetRecordDelimiter">ResetRecordDelimiter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConsumerStrategy` <a name="ResetConsumerStrategy" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetConsumerStrategy"></a>

```go
func ResetConsumerStrategy()
```

##### `ResetDestinationFileType` <a name="ResetDestinationFileType" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetDestinationFileType"></a>

```go
func ResetDestinationFileType()
```

##### `ResetFilePrefix` <a name="ResetFilePrefix" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetFilePrefix"></a>

```go
func ResetFilePrefix()
```

##### `ResetPartitionFormat` <a name="ResetPartitionFormat" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetPartitionFormat"></a>

```go
func ResetPartitionFormat()
```

##### `ResetRecordDelimiter` <a name="ResetRecordDelimiter" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.resetRecordDelimiter"></a>

```go
func ResetRecordDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.agencyNameInput">AgencyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.consumerStrategyInput">ConsumerStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.deliverTimeIntervalInput">DeliverTimeIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.destinationFileTypeInput">DestinationFileTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.filePrefixInput">FilePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.obsBucketPathInput">ObsBucketPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.partitionFormatInput">PartitionFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.recordDelimiterInput">RecordDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.taskNameInput">TaskNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.agencyName">AgencyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.consumerStrategy">ConsumerStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.deliverTimeInterval">DeliverTimeInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.destinationFileType">DestinationFileType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.filePrefix">FilePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.obsBucketPath">ObsBucketPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.partitionFormat">PartitionFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.taskName">TaskName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgencyNameInput`<sup>Optional</sup> <a name="AgencyNameInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.agencyNameInput"></a>

```go
func AgencyNameInput() *string
```

- *Type:* *string

---

##### `ConsumerStrategyInput`<sup>Optional</sup> <a name="ConsumerStrategyInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.consumerStrategyInput"></a>

```go
func ConsumerStrategyInput() *string
```

- *Type:* *string

---

##### `DeliverTimeIntervalInput`<sup>Optional</sup> <a name="DeliverTimeIntervalInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.deliverTimeIntervalInput"></a>

```go
func DeliverTimeIntervalInput() *f64
```

- *Type:* *f64

---

##### `DestinationFileTypeInput`<sup>Optional</sup> <a name="DestinationFileTypeInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.destinationFileTypeInput"></a>

```go
func DestinationFileTypeInput() *string
```

- *Type:* *string

---

##### `FilePrefixInput`<sup>Optional</sup> <a name="FilePrefixInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.filePrefixInput"></a>

```go
func FilePrefixInput() *string
```

- *Type:* *string

---

##### `ObsBucketPathInput`<sup>Optional</sup> <a name="ObsBucketPathInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.obsBucketPathInput"></a>

```go
func ObsBucketPathInput() *string
```

- *Type:* *string

---

##### `PartitionFormatInput`<sup>Optional</sup> <a name="PartitionFormatInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.partitionFormatInput"></a>

```go
func PartitionFormatInput() *string
```

- *Type:* *string

---

##### `RecordDelimiterInput`<sup>Optional</sup> <a name="RecordDelimiterInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.recordDelimiterInput"></a>

```go
func RecordDelimiterInput() *string
```

- *Type:* *string

---

##### `TaskNameInput`<sup>Optional</sup> <a name="TaskNameInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.taskNameInput"></a>

```go
func TaskNameInput() *string
```

- *Type:* *string

---

##### `AgencyName`<sup>Required</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.agencyName"></a>

```go
func AgencyName() *string
```

- *Type:* *string

---

##### `ConsumerStrategy`<sup>Required</sup> <a name="ConsumerStrategy" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.consumerStrategy"></a>

```go
func ConsumerStrategy() *string
```

- *Type:* *string

---

##### `DeliverTimeInterval`<sup>Required</sup> <a name="DeliverTimeInterval" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.deliverTimeInterval"></a>

```go
func DeliverTimeInterval() *f64
```

- *Type:* *f64

---

##### `DestinationFileType`<sup>Required</sup> <a name="DestinationFileType" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.destinationFileType"></a>

```go
func DestinationFileType() *string
```

- *Type:* *string

---

##### `FilePrefix`<sup>Required</sup> <a name="FilePrefix" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.filePrefix"></a>

```go
func FilePrefix() *string
```

- *Type:* *string

---

##### `ObsBucketPath`<sup>Required</sup> <a name="ObsBucketPath" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.obsBucketPath"></a>

```go
func ObsBucketPath() *string
```

- *Type:* *string

---

##### `PartitionFormat`<sup>Required</sup> <a name="PartitionFormat" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.partitionFormat"></a>

```go
func PartitionFormat() *string
```

- *Type:* *string

---

##### `RecordDelimiter`<sup>Required</sup> <a name="RecordDelimiter" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.recordDelimiter"></a>

```go
func RecordDelimiter() *string
```

- *Type:* *string

---

##### `TaskName`<sup>Required</sup> <a name="TaskName" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.taskName"></a>

```go
func TaskName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsDestinationDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DisDumpTaskV2ObsProcessingSchemaList <a name="DisDumpTaskV2ObsProcessingSchemaList" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

disdumptaskv2.NewDisDumpTaskV2ObsProcessingSchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DisDumpTaskV2ObsProcessingSchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.get"></a>

```go
func Get(index *f64) DisDumpTaskV2ObsProcessingSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DisDumpTaskV2ObsProcessingSchemaOutputReference <a name="DisDumpTaskV2ObsProcessingSchemaOutputReference" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

disdumptaskv2.NewDisDumpTaskV2ObsProcessingSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DisDumpTaskV2ObsProcessingSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.resetTimestampFormat"></a>

```go
func ResetTimestampFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampNameInput">TimestampNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampTypeInput">TimestampTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampName">TimestampName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampType">TimestampType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampFormatInput"></a>

```go
func TimestampFormatInput() *string
```

- *Type:* *string

---

##### `TimestampNameInput`<sup>Optional</sup> <a name="TimestampNameInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampNameInput"></a>

```go
func TimestampNameInput() *string
```

- *Type:* *string

---

##### `TimestampTypeInput`<sup>Optional</sup> <a name="TimestampTypeInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampTypeInput"></a>

```go
func TimestampTypeInput() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TimestampName`<sup>Required</sup> <a name="TimestampName" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampName"></a>

```go
func TimestampName() *string
```

- *Type:* *string

---

##### `TimestampType`<sup>Required</sup> <a name="TimestampType" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.timestampType"></a>

```go
func TimestampType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2ObsProcessingSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DisDumpTaskV2PartitionsList <a name="DisDumpTaskV2PartitionsList" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

disdumptaskv2.NewDisDumpTaskV2PartitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DisDumpTaskV2PartitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.get"></a>

```go
func Get(index *f64) DisDumpTaskV2PartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DisDumpTaskV2PartitionsOutputReference <a name="DisDumpTaskV2PartitionsOutputReference" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

disdumptaskv2.NewDisDumpTaskV2PartitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DisDumpTaskV2PartitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.hashRange">HashRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.parentPartitions">ParentPartitions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.sequenceNumberRange">SequenceNumberRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Partitions">DisDumpTaskV2Partitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HashRange`<sup>Required</sup> <a name="HashRange" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.hashRange"></a>

```go
func HashRange() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ParentPartitions`<sup>Required</sup> <a name="ParentPartitions" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.parentPartitions"></a>

```go
func ParentPartitions() *string
```

- *Type:* *string

---

##### `SequenceNumberRange`<sup>Required</sup> <a name="SequenceNumberRange" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.sequenceNumberRange"></a>

```go
func SequenceNumberRange() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2PartitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DisDumpTaskV2Partitions
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2Partitions">DisDumpTaskV2Partitions</a>

---


### DisDumpTaskV2TimeoutsOutputReference <a name="DisDumpTaskV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/disdumptaskv2"

disdumptaskv2.NewDisDumpTaskV2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DisDumpTaskV2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.disDumpTaskV2.DisDumpTaskV2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



