# `asLifecycleHookV1` Submodule <a name="`asLifecycleHookV1` Submodule" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsLifecycleHookV1 <a name="AsLifecycleHookV1" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1 opentelekomcloud_as_lifecycle_hook_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/aslifecyclehookv1"

aslifecyclehookv1.NewAsLifecycleHookV1(scope Construct, id *string, config AsLifecycleHookV1Config) AsLifecycleHookV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config">AsLifecycleHookV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config">AsLifecycleHookV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetDefaultResult">ResetDefaultResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetDefaultTimeout">ResetDefaultTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetNotificationMetadata">ResetNotificationMetadata</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDefaultResult` <a name="ResetDefaultResult" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetDefaultResult"></a>

```go
func ResetDefaultResult()
```

##### `ResetDefaultTimeout` <a name="ResetDefaultTimeout" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetDefaultTimeout"></a>

```go
func ResetDefaultTimeout()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetId"></a>

```go
func ResetId()
```

##### `ResetNotificationMetadata` <a name="ResetNotificationMetadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetNotificationMetadata"></a>

```go
func ResetNotificationMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AsLifecycleHookV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/aslifecyclehookv1"

aslifecyclehookv1.AsLifecycleHookV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/aslifecyclehookv1"

aslifecyclehookv1.AsLifecycleHookV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/aslifecyclehookv1"

aslifecyclehookv1.AsLifecycleHookV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/aslifecyclehookv1"

aslifecyclehookv1.AsLifecycleHookV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AsLifecycleHookV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AsLifecycleHookV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AsLifecycleHookV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AsLifecycleHookV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicName">NotificationTopicName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultResultInput">DefaultResultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultTimeoutInput">DefaultTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationMetadataInput">NotificationMetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicUrnInput">NotificationTopicUrnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingGroupIdInput">ScalingGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookNameInput">ScalingLifecycleHookNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookTypeInput">ScalingLifecycleHookTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultResult">DefaultResult</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultTimeout">DefaultTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationMetadata">NotificationMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicUrn">NotificationTopicUrn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingGroupId">ScalingGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookName">ScalingLifecycleHookName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookType">ScalingLifecycleHookType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `NotificationTopicName`<sup>Required</sup> <a name="NotificationTopicName" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicName"></a>

```go
func NotificationTopicName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `DefaultResultInput`<sup>Optional</sup> <a name="DefaultResultInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultResultInput"></a>

```go
func DefaultResultInput() *string
```

- *Type:* *string

---

##### `DefaultTimeoutInput`<sup>Optional</sup> <a name="DefaultTimeoutInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultTimeoutInput"></a>

```go
func DefaultTimeoutInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NotificationMetadataInput`<sup>Optional</sup> <a name="NotificationMetadataInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationMetadataInput"></a>

```go
func NotificationMetadataInput() *string
```

- *Type:* *string

---

##### `NotificationTopicUrnInput`<sup>Optional</sup> <a name="NotificationTopicUrnInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicUrnInput"></a>

```go
func NotificationTopicUrnInput() *string
```

- *Type:* *string

---

##### `ScalingGroupIdInput`<sup>Optional</sup> <a name="ScalingGroupIdInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingGroupIdInput"></a>

```go
func ScalingGroupIdInput() *string
```

- *Type:* *string

---

##### `ScalingLifecycleHookNameInput`<sup>Optional</sup> <a name="ScalingLifecycleHookNameInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookNameInput"></a>

```go
func ScalingLifecycleHookNameInput() *string
```

- *Type:* *string

---

##### `ScalingLifecycleHookTypeInput`<sup>Optional</sup> <a name="ScalingLifecycleHookTypeInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookTypeInput"></a>

```go
func ScalingLifecycleHookTypeInput() *string
```

- *Type:* *string

---

##### `DefaultResult`<sup>Required</sup> <a name="DefaultResult" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultResult"></a>

```go
func DefaultResult() *string
```

- *Type:* *string

---

##### `DefaultTimeout`<sup>Required</sup> <a name="DefaultTimeout" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultTimeout"></a>

```go
func DefaultTimeout() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NotificationMetadata`<sup>Required</sup> <a name="NotificationMetadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationMetadata"></a>

```go
func NotificationMetadata() *string
```

- *Type:* *string

---

##### `NotificationTopicUrn`<sup>Required</sup> <a name="NotificationTopicUrn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicUrn"></a>

```go
func NotificationTopicUrn() *string
```

- *Type:* *string

---

##### `ScalingGroupId`<sup>Required</sup> <a name="ScalingGroupId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingGroupId"></a>

```go
func ScalingGroupId() *string
```

- *Type:* *string

---

##### `ScalingLifecycleHookName`<sup>Required</sup> <a name="ScalingLifecycleHookName" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookName"></a>

```go
func ScalingLifecycleHookName() *string
```

- *Type:* *string

---

##### `ScalingLifecycleHookType`<sup>Required</sup> <a name="ScalingLifecycleHookType" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookType"></a>

```go
func ScalingLifecycleHookType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AsLifecycleHookV1Config <a name="AsLifecycleHookV1Config" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/aslifecyclehookv1"

&aslifecyclehookv1.AsLifecycleHookV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	NotificationTopicUrn: *string,
	ScalingGroupId: *string,
	ScalingLifecycleHookName: *string,
	ScalingLifecycleHookType: *string,
	DefaultResult: *string,
	DefaultTimeout: *f64,
	Id: *string,
	NotificationMetadata: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.notificationTopicUrn">NotificationTopicUrn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#notification_topic_urn AsLifecycleHookV1#notification_topic_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingGroupId">ScalingGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#scaling_group_id AsLifecycleHookV1#scaling_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingLifecycleHookName">ScalingLifecycleHookName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_name AsLifecycleHookV1#scaling_lifecycle_hook_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingLifecycleHookType">ScalingLifecycleHookType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_type AsLifecycleHookV1#scaling_lifecycle_hook_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.defaultResult">DefaultResult</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#default_result AsLifecycleHookV1#default_result}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.defaultTimeout">DefaultTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#default_timeout AsLifecycleHookV1#default_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#id AsLifecycleHookV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.notificationMetadata">NotificationMetadata</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#notification_metadata AsLifecycleHookV1#notification_metadata}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NotificationTopicUrn`<sup>Required</sup> <a name="NotificationTopicUrn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.notificationTopicUrn"></a>

```go
NotificationTopicUrn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#notification_topic_urn AsLifecycleHookV1#notification_topic_urn}.

---

##### `ScalingGroupId`<sup>Required</sup> <a name="ScalingGroupId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingGroupId"></a>

```go
ScalingGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#scaling_group_id AsLifecycleHookV1#scaling_group_id}.

---

##### `ScalingLifecycleHookName`<sup>Required</sup> <a name="ScalingLifecycleHookName" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingLifecycleHookName"></a>

```go
ScalingLifecycleHookName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_name AsLifecycleHookV1#scaling_lifecycle_hook_name}.

---

##### `ScalingLifecycleHookType`<sup>Required</sup> <a name="ScalingLifecycleHookType" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingLifecycleHookType"></a>

```go
ScalingLifecycleHookType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_type AsLifecycleHookV1#scaling_lifecycle_hook_type}.

---

##### `DefaultResult`<sup>Optional</sup> <a name="DefaultResult" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.defaultResult"></a>

```go
DefaultResult *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#default_result AsLifecycleHookV1#default_result}.

---

##### `DefaultTimeout`<sup>Optional</sup> <a name="DefaultTimeout" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.defaultTimeout"></a>

```go
DefaultTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#default_timeout AsLifecycleHookV1#default_timeout}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#id AsLifecycleHookV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationMetadata`<sup>Optional</sup> <a name="NotificationMetadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.notificationMetadata"></a>

```go
NotificationMetadata *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/as_lifecycle_hook_v1#notification_metadata AsLifecycleHookV1#notification_metadata}.

---



