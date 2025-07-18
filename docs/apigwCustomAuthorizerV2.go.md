# `apigwCustomAuthorizerV2` Submodule <a name="`apigwCustomAuthorizerV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwCustomAuthorizerV2 <a name="ApigwCustomAuthorizerV2" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2 opentelekomcloud_apigw_custom_authorizer_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/apigwcustomauthorizerv2"

apigwcustomauthorizerv2.NewApigwCustomAuthorizerV2(scope Construct, id *string, config ApigwCustomAuthorizerV2Config) ApigwCustomAuthorizerV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config">ApigwCustomAuthorizerV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config">ApigwCustomAuthorizerV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetIsBodySend">ResetIsBodySend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.putIdentity"></a>

```go
func PutIdentity(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.putIdentity.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetIsBodySend` <a name="ResetIsBodySend" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetIsBodySend"></a>

```go
func ResetIsBodySend()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetType"></a>

```go
func ResetType()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetUserData"></a>

```go
func ResetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigwCustomAuthorizerV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/apigwcustomauthorizerv2"

apigwcustomauthorizerv2.ApigwCustomAuthorizerV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/apigwcustomauthorizerv2"

apigwcustomauthorizerv2.ApigwCustomAuthorizerV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/apigwcustomauthorizerv2"

apigwcustomauthorizerv2.ApigwCustomAuthorizerV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/apigwcustomauthorizerv2"

apigwcustomauthorizerv2.ApigwCustomAuthorizerV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApigwCustomAuthorizerV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigwCustomAuthorizerV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigwCustomAuthorizerV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApigwCustomAuthorizerV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList">ApigwCustomAuthorizerV2IdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.functionUrnInput">FunctionUrnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.gatewayIdInput">GatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.identityInput">IdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.isBodySendInput">IsBodySendInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.functionUrn">FunctionUrn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.isBodySend">IsBodySend</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.identity"></a>

```go
func Identity() ApigwCustomAuthorizerV2IdentityList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList">ApigwCustomAuthorizerV2IdentityList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `FunctionUrnInput`<sup>Optional</sup> <a name="FunctionUrnInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.functionUrnInput"></a>

```go
func FunctionUrnInput() *string
```

- *Type:* *string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.gatewayIdInput"></a>

```go
func GatewayIdInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.identityInput"></a>

```go
func IdentityInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsBodySendInput`<sup>Optional</sup> <a name="IsBodySendInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.isBodySendInput"></a>

```go
func IsBodySendInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `FunctionUrn`<sup>Required</sup> <a name="FunctionUrn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.functionUrn"></a>

```go
func FunctionUrn() *string
```

- *Type:* *string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsBodySend`<sup>Required</sup> <a name="IsBodySend" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.isBodySend"></a>

```go
func IsBodySend() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwCustomAuthorizerV2Config <a name="ApigwCustomAuthorizerV2Config" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/apigwcustomauthorizerv2"

&apigwcustomauthorizerv2.ApigwCustomAuthorizerV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FunctionUrn: *string,
	GatewayId: *string,
	Name: *string,
	Id: *string,
	Identity: interface{},
	IsBodySend: interface{},
	Ttl: *f64,
	Type: *string,
	UserData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.functionUrn">FunctionUrn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#function_urn ApigwCustomAuthorizerV2#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.gatewayId">GatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#gateway_id ApigwCustomAuthorizerV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#id ApigwCustomAuthorizerV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.identity">Identity</a></code> | <code>interface{}</code> | identity block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.isBodySend">IsBodySend</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#is_body_send ApigwCustomAuthorizerV2#is_body_send}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.ttl">Ttl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#ttl ApigwCustomAuthorizerV2#ttl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#type ApigwCustomAuthorizerV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.userData">UserData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#user_data ApigwCustomAuthorizerV2#user_data}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FunctionUrn`<sup>Required</sup> <a name="FunctionUrn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.functionUrn"></a>

```go
FunctionUrn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#function_urn ApigwCustomAuthorizerV2#function_urn}.

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.gatewayId"></a>

```go
GatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#gateway_id ApigwCustomAuthorizerV2#gateway_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#id ApigwCustomAuthorizerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.identity"></a>

```go
Identity interface{}
```

- *Type:* interface{}

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#identity ApigwCustomAuthorizerV2#identity}

---

##### `IsBodySend`<sup>Optional</sup> <a name="IsBodySend" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.isBodySend"></a>

```go
IsBodySend interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#is_body_send ApigwCustomAuthorizerV2#is_body_send}.

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#ttl ApigwCustomAuthorizerV2#ttl}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#type ApigwCustomAuthorizerV2#type}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#user_data ApigwCustomAuthorizerV2#user_data}.

---

### ApigwCustomAuthorizerV2Identity <a name="ApigwCustomAuthorizerV2Identity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/apigwcustomauthorizerv2"

&apigwcustomauthorizerv2.ApigwCustomAuthorizerV2Identity {
	Location: *string,
	Name: *string,
	Validation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#location ApigwCustomAuthorizerV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.validation">Validation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#validation ApigwCustomAuthorizerV2#validation}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#location ApigwCustomAuthorizerV2#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}.

---

##### `Validation`<sup>Optional</sup> <a name="Validation" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.validation"></a>

```go
Validation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/apigw_custom_authorizer_v2#validation ApigwCustomAuthorizerV2#validation}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigwCustomAuthorizerV2IdentityList <a name="ApigwCustomAuthorizerV2IdentityList" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/apigwcustomauthorizerv2"

apigwcustomauthorizerv2.NewApigwCustomAuthorizerV2IdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigwCustomAuthorizerV2IdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.get"></a>

```go
func Get(index *f64) ApigwCustomAuthorizerV2IdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwCustomAuthorizerV2IdentityOutputReference <a name="ApigwCustomAuthorizerV2IdentityOutputReference" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/apigwcustomauthorizerv2"

apigwcustomauthorizerv2.NewApigwCustomAuthorizerV2IdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigwCustomAuthorizerV2IdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resetValidation">ResetValidation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValidation` <a name="ResetValidation" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resetValidation"></a>

```go
func ResetValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.validationInput">ValidationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.validation">Validation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValidationInput`<sup>Optional</sup> <a name="ValidationInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.validationInput"></a>

```go
func ValidationInput() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.validation"></a>

```go
func Validation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



