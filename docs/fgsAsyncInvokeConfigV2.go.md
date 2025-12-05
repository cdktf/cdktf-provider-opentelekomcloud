# `fgsAsyncInvokeConfigV2` Submodule <a name="`fgsAsyncInvokeConfigV2` Submodule" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FgsAsyncInvokeConfigV2 <a name="FgsAsyncInvokeConfigV2" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2 opentelekomcloud_fgs_async_invoke_config_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/fgsasyncinvokeconfigv2"

fgsasyncinvokeconfigv2.NewFgsAsyncInvokeConfigV2(scope Construct, id *string, config FgsAsyncInvokeConfigV2Config) FgsAsyncInvokeConfigV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config">FgsAsyncInvokeConfigV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config">FgsAsyncInvokeConfigV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnFailure">PutOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnSuccess">PutOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOnFailure">ResetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOnSuccess">ResetOnSuccess</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOnFailure` <a name="PutOnFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnFailure"></a>

```go
func PutOnFailure(value FgsAsyncInvokeConfigV2OnFailure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

---

##### `PutOnSuccess` <a name="PutOnSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnSuccess"></a>

```go
func PutOnSuccess(value FgsAsyncInvokeConfigV2OnSuccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetId"></a>

```go
func ResetId()
```

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOnFailure"></a>

```go
func ResetOnFailure()
```

##### `ResetOnSuccess` <a name="ResetOnSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOnSuccess"></a>

```go
func ResetOnSuccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FgsAsyncInvokeConfigV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/fgsasyncinvokeconfigv2"

fgsasyncinvokeconfigv2.FgsAsyncInvokeConfigV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/fgsasyncinvokeconfigv2"

fgsasyncinvokeconfigv2.FgsAsyncInvokeConfigV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/fgsasyncinvokeconfigv2"

fgsasyncinvokeconfigv2.FgsAsyncInvokeConfigV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/fgsasyncinvokeconfigv2"

fgsasyncinvokeconfigv2.FgsAsyncInvokeConfigV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FgsAsyncInvokeConfigV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FgsAsyncInvokeConfigV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FgsAsyncInvokeConfigV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FgsAsyncInvokeConfigV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference">FgsAsyncInvokeConfigV2OnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onSuccess">OnSuccess</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference">FgsAsyncInvokeConfigV2OnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.functionUrnInput">FunctionUrnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncEventAgeInSecondsInput">MaxAsyncEventAgeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncRetryAttemptsInput">MaxAsyncRetryAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onFailureInput">OnFailureInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onSuccessInput">OnSuccessInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.functionUrn">FunctionUrn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncEventAgeInSeconds">MaxAsyncEventAgeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncRetryAttempts">MaxAsyncRetryAttempts</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onFailure"></a>

```go
func OnFailure() FgsAsyncInvokeConfigV2OnFailureOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference">FgsAsyncInvokeConfigV2OnFailureOutputReference</a>

---

##### `OnSuccess`<sup>Required</sup> <a name="OnSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onSuccess"></a>

```go
func OnSuccess() FgsAsyncInvokeConfigV2OnSuccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference">FgsAsyncInvokeConfigV2OnSuccessOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `FunctionUrnInput`<sup>Optional</sup> <a name="FunctionUrnInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.functionUrnInput"></a>

```go
func FunctionUrnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxAsyncEventAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAsyncEventAgeInSecondsInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncEventAgeInSecondsInput"></a>

```go
func MaxAsyncEventAgeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxAsyncRetryAttemptsInput`<sup>Optional</sup> <a name="MaxAsyncRetryAttemptsInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncRetryAttemptsInput"></a>

```go
func MaxAsyncRetryAttemptsInput() *f64
```

- *Type:* *f64

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onFailureInput"></a>

```go
func OnFailureInput() FgsAsyncInvokeConfigV2OnFailure
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

---

##### `OnSuccessInput`<sup>Optional</sup> <a name="OnSuccessInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onSuccessInput"></a>

```go
func OnSuccessInput() FgsAsyncInvokeConfigV2OnSuccess
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

---

##### `FunctionUrn`<sup>Required</sup> <a name="FunctionUrn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.functionUrn"></a>

```go
func FunctionUrn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxAsyncEventAgeInSeconds`<sup>Required</sup> <a name="MaxAsyncEventAgeInSeconds" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncEventAgeInSeconds"></a>

```go
func MaxAsyncEventAgeInSeconds() *f64
```

- *Type:* *f64

---

##### `MaxAsyncRetryAttempts`<sup>Required</sup> <a name="MaxAsyncRetryAttempts" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncRetryAttempts"></a>

```go
func MaxAsyncRetryAttempts() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FgsAsyncInvokeConfigV2Config <a name="FgsAsyncInvokeConfigV2Config" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/fgsasyncinvokeconfigv2"

&fgsasyncinvokeconfigv2.FgsAsyncInvokeConfigV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FunctionUrn: *string,
	MaxAsyncEventAgeInSeconds: *f64,
	MaxAsyncRetryAttempts: *f64,
	Id: *string,
	OnFailure: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure,
	OnSuccess: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.functionUrn">FunctionUrn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#function_urn FgsAsyncInvokeConfigV2#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.maxAsyncEventAgeInSeconds">MaxAsyncEventAgeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#max_async_event_age_in_seconds FgsAsyncInvokeConfigV2#max_async_event_age_in_seconds}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.maxAsyncRetryAttempts">MaxAsyncRetryAttempts</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#max_async_retry_attempts FgsAsyncInvokeConfigV2#max_async_retry_attempts}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#id FgsAsyncInvokeConfigV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a></code> | on_failure block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.onSuccess">OnSuccess</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a></code> | on_success block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FunctionUrn`<sup>Required</sup> <a name="FunctionUrn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.functionUrn"></a>

```go
FunctionUrn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#function_urn FgsAsyncInvokeConfigV2#function_urn}.

---

##### `MaxAsyncEventAgeInSeconds`<sup>Required</sup> <a name="MaxAsyncEventAgeInSeconds" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.maxAsyncEventAgeInSeconds"></a>

```go
MaxAsyncEventAgeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#max_async_event_age_in_seconds FgsAsyncInvokeConfigV2#max_async_event_age_in_seconds}.

---

##### `MaxAsyncRetryAttempts`<sup>Required</sup> <a name="MaxAsyncRetryAttempts" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.maxAsyncRetryAttempts"></a>

```go
MaxAsyncRetryAttempts *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#max_async_retry_attempts FgsAsyncInvokeConfigV2#max_async_retry_attempts}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#id FgsAsyncInvokeConfigV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.onFailure"></a>

```go
OnFailure FgsAsyncInvokeConfigV2OnFailure
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#on_failure FgsAsyncInvokeConfigV2#on_failure}

---

##### `OnSuccess`<sup>Optional</sup> <a name="OnSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.onSuccess"></a>

```go
OnSuccess FgsAsyncInvokeConfigV2OnSuccess
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

on_success block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#on_success FgsAsyncInvokeConfigV2#on_success}

---

### FgsAsyncInvokeConfigV2OnFailure <a name="FgsAsyncInvokeConfigV2OnFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/fgsasyncinvokeconfigv2"

&fgsasyncinvokeconfigv2.FgsAsyncInvokeConfigV2OnFailure {
	Destination: *string,
	Param: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.property.param">Param</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}.

---

##### `Param`<sup>Required</sup> <a name="Param" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.property.param"></a>

```go
Param *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}.

---

### FgsAsyncInvokeConfigV2OnSuccess <a name="FgsAsyncInvokeConfigV2OnSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/fgsasyncinvokeconfigv2"

&fgsasyncinvokeconfigv2.FgsAsyncInvokeConfigV2OnSuccess {
	Destination: *string,
	Param: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.property.param">Param</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}.

---

##### `Param`<sup>Required</sup> <a name="Param" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.property.param"></a>

```go
Param *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}.

---

## Classes <a name="Classes" id="Classes"></a>

### FgsAsyncInvokeConfigV2OnFailureOutputReference <a name="FgsAsyncInvokeConfigV2OnFailureOutputReference" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/fgsasyncinvokeconfigv2"

fgsasyncinvokeconfigv2.NewFgsAsyncInvokeConfigV2OnFailureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FgsAsyncInvokeConfigV2OnFailureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.paramInput">ParamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.param">Param</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `ParamInput`<sup>Optional</sup> <a name="ParamInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.paramInput"></a>

```go
func ParamInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Param`<sup>Required</sup> <a name="Param" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.param"></a>

```go
func Param() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.internalValue"></a>

```go
func InternalValue() FgsAsyncInvokeConfigV2OnFailure
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

---


### FgsAsyncInvokeConfigV2OnSuccessOutputReference <a name="FgsAsyncInvokeConfigV2OnSuccessOutputReference" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/fgsasyncinvokeconfigv2"

fgsasyncinvokeconfigv2.NewFgsAsyncInvokeConfigV2OnSuccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FgsAsyncInvokeConfigV2OnSuccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.paramInput">ParamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.param">Param</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `ParamInput`<sup>Optional</sup> <a name="ParamInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.paramInput"></a>

```go
func ParamInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Param`<sup>Required</sup> <a name="Param" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.param"></a>

```go
func Param() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.internalValue"></a>

```go
func InternalValue() FgsAsyncInvokeConfigV2OnSuccess
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

---



