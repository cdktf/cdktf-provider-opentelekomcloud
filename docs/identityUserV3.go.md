# `identityUserV3` Submodule <a name="`identityUserV3` Submodule" id="@cdktf/provider-opentelekomcloud.identityUserV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityUserV3 <a name="IdentityUserV3" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3 opentelekomcloud_identity_user_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityuserv3"

identityuserv3.NewIdentityUserV3(scope Construct, id *string, config IdentityUserV3Config) IdentityUserV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config">IdentityUserV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config">IdentityUserV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.putLoginProtection">PutLoginProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetAccessType">ResetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetLoginProtection">ResetLoginProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetPhone">ResetPhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetPwdReset">ResetPwdReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetSendWelcomeEmail">ResetSendWelcomeEmail</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoginProtection` <a name="PutLoginProtection" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.putLoginProtection"></a>

```go
func PutLoginProtection(value IdentityUserV3LoginProtection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.putLoginProtection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtection">IdentityUserV3LoginProtection</a>

---

##### `ResetAccessType` <a name="ResetAccessType" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetAccessType"></a>

```go
func ResetAccessType()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetId"></a>

```go
func ResetId()
```

##### `ResetLoginProtection` <a name="ResetLoginProtection" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetLoginProtection"></a>

```go
func ResetLoginProtection()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPhone` <a name="ResetPhone" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetPhone"></a>

```go
func ResetPhone()
```

##### `ResetPwdReset` <a name="ResetPwdReset" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetPwdReset"></a>

```go
func ResetPwdReset()
```

##### `ResetSendWelcomeEmail` <a name="ResetSendWelcomeEmail" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.resetSendWelcomeEmail"></a>

```go
func ResetSendWelcomeEmail()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityUserV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityuserv3"

identityuserv3.IdentityUserV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityuserv3"

identityuserv3.IdentityUserV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityuserv3"

identityuserv3.IdentityUserV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityuserv3"

identityuserv3.IdentityUserV3_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IdentityUserV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdentityUserV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdentityUserV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IdentityUserV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.lastLogin">LastLogin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.loginProtection">LoginProtection</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference">IdentityUserV3LoginProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.passwordStrength">PasswordStrength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.xuserId">XuserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.xuserType">XuserType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.accessTypeInput">AccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.loginProtectionInput">LoginProtectionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtection">IdentityUserV3LoginProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.phoneInput">PhoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.pwdResetInput">PwdResetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.sendWelcomeEmailInput">SendWelcomeEmailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.pwdReset">PwdReset</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.sendWelcomeEmail">SendWelcomeEmail</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `LastLogin`<sup>Required</sup> <a name="LastLogin" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.lastLogin"></a>

```go
func LastLogin() *string
```

- *Type:* *string

---

##### `LoginProtection`<sup>Required</sup> <a name="LoginProtection" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.loginProtection"></a>

```go
func LoginProtection() IdentityUserV3LoginProtectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference">IdentityUserV3LoginProtectionOutputReference</a>

---

##### `PasswordStrength`<sup>Required</sup> <a name="PasswordStrength" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.passwordStrength"></a>

```go
func PasswordStrength() *string
```

- *Type:* *string

---

##### `XuserId`<sup>Required</sup> <a name="XuserId" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.xuserId"></a>

```go
func XuserId() *string
```

- *Type:* *string

---

##### `XuserType`<sup>Required</sup> <a name="XuserType" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.xuserType"></a>

```go
func XuserType() *string
```

- *Type:* *string

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.accessTypeInput"></a>

```go
func AccessTypeInput() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoginProtectionInput`<sup>Optional</sup> <a name="LoginProtectionInput" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.loginProtectionInput"></a>

```go
func LoginProtectionInput() IdentityUserV3LoginProtection
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtection">IdentityUserV3LoginProtection</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PhoneInput`<sup>Optional</sup> <a name="PhoneInput" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.phoneInput"></a>

```go
func PhoneInput() *string
```

- *Type:* *string

---

##### `PwdResetInput`<sup>Optional</sup> <a name="PwdResetInput" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.pwdResetInput"></a>

```go
func PwdResetInput() interface{}
```

- *Type:* interface{}

---

##### `SendWelcomeEmailInput`<sup>Optional</sup> <a name="SendWelcomeEmailInput" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.sendWelcomeEmailInput"></a>

```go
func SendWelcomeEmailInput() interface{}
```

- *Type:* interface{}

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `PwdReset`<sup>Required</sup> <a name="PwdReset" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.pwdReset"></a>

```go
func PwdReset() interface{}
```

- *Type:* interface{}

---

##### `SendWelcomeEmail`<sup>Required</sup> <a name="SendWelcomeEmail" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.sendWelcomeEmail"></a>

```go
func SendWelcomeEmail() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityUserV3Config <a name="IdentityUserV3Config" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityuserv3"

&identityuserv3.IdentityUserV3Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccessType: *string,
	CountryCode: *string,
	Description: *string,
	Email: *string,
	Enabled: interface{},
	Id: *string,
	LoginProtection: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.identityUserV3.IdentityUserV3LoginProtection,
	Password: *string,
	Phone: *string,
	PwdReset: interface{},
	SendWelcomeEmail: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#name IdentityUserV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.accessType">AccessType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#access_type IdentityUserV3#access_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.countryCode">CountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#country_code IdentityUserV3#country_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#description IdentityUserV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#email IdentityUserV3#email}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#enabled IdentityUserV3#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#id IdentityUserV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.loginProtection">LoginProtection</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtection">IdentityUserV3LoginProtection</a></code> | login_protection block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#password IdentityUserV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.phone">Phone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#phone IdentityUserV3#phone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.pwdReset">PwdReset</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#pwd_reset IdentityUserV3#pwd_reset}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.sendWelcomeEmail">SendWelcomeEmail</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#send_welcome_email IdentityUserV3#send_welcome_email}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#name IdentityUserV3#name}.

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.accessType"></a>

```go
AccessType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#access_type IdentityUserV3#access_type}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#country_code IdentityUserV3#country_code}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#description IdentityUserV3#description}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#email IdentityUserV3#email}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#enabled IdentityUserV3#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#id IdentityUserV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoginProtection`<sup>Optional</sup> <a name="LoginProtection" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.loginProtection"></a>

```go
LoginProtection IdentityUserV3LoginProtection
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtection">IdentityUserV3LoginProtection</a>

login_protection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#login_protection IdentityUserV3#login_protection}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#password IdentityUserV3#password}.

---

##### `Phone`<sup>Optional</sup> <a name="Phone" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.phone"></a>

```go
Phone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#phone IdentityUserV3#phone}.

---

##### `PwdReset`<sup>Optional</sup> <a name="PwdReset" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.pwdReset"></a>

```go
PwdReset interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#pwd_reset IdentityUserV3#pwd_reset}.

---

##### `SendWelcomeEmail`<sup>Optional</sup> <a name="SendWelcomeEmail" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3Config.property.sendWelcomeEmail"></a>

```go
SendWelcomeEmail interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#send_welcome_email IdentityUserV3#send_welcome_email}.

---

### IdentityUserV3LoginProtection <a name="IdentityUserV3LoginProtection" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityuserv3"

&identityuserv3.IdentityUserV3LoginProtection {
	Enabled: interface{},
	VerificationMethod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtection.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#enabled IdentityUserV3#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtection.property.verificationMethod">VerificationMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#verification_method IdentityUserV3#verification_method}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtection.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#enabled IdentityUserV3#enabled}.

---

##### `VerificationMethod`<sup>Required</sup> <a name="VerificationMethod" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtection.property.verificationMethod"></a>

```go
VerificationMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/identity_user_v3#verification_method IdentityUserV3#verification_method}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityUserV3LoginProtectionOutputReference <a name="IdentityUserV3LoginProtectionOutputReference" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityuserv3"

identityuserv3.NewIdentityUserV3LoginProtectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityUserV3LoginProtectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.property.verificationMethodInput">VerificationMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.property.verificationMethod">VerificationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtection">IdentityUserV3LoginProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VerificationMethodInput`<sup>Optional</sup> <a name="VerificationMethodInput" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.property.verificationMethodInput"></a>

```go
func VerificationMethodInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `VerificationMethod`<sup>Required</sup> <a name="VerificationMethod" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.property.verificationMethod"></a>

```go
func VerificationMethod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtectionOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityUserV3LoginProtection
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityUserV3.IdentityUserV3LoginProtection">IdentityUserV3LoginProtection</a>

---



