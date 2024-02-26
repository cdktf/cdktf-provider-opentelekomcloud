# `identityPasswordPolicyV3` Submodule <a name="`identityPasswordPolicyV3` Submodule" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPasswordPolicyV3 <a name="IdentityPasswordPolicyV3" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/identity_password_policy_v3 opentelekomcloud_identity_password_policy_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/identitypasswordpolicyv3"

identitypasswordpolicyv3.NewIdentityPasswordPolicyV3(scope Construct, id *string, config IdentityPasswordPolicyV3Config) IdentityPasswordPolicyV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config">IdentityPasswordPolicyV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config">IdentityPasswordPolicyV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetMaximumConsecutiveIdenticalChars">ResetMaximumConsecutiveIdenticalChars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetMinimumPasswordAge">ResetMinimumPasswordAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetMinimumPasswordLength">ResetMinimumPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetNumberOfRecentPasswordsDisallowed">ResetNumberOfRecentPasswordsDisallowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetPasswordNotUsernameOrInvert">ResetPasswordNotUsernameOrInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetPasswordValidityPeriod">ResetPasswordValidityPeriod</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetId"></a>

```go
func ResetId()
```

##### `ResetMaximumConsecutiveIdenticalChars` <a name="ResetMaximumConsecutiveIdenticalChars" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetMaximumConsecutiveIdenticalChars"></a>

```go
func ResetMaximumConsecutiveIdenticalChars()
```

##### `ResetMinimumPasswordAge` <a name="ResetMinimumPasswordAge" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetMinimumPasswordAge"></a>

```go
func ResetMinimumPasswordAge()
```

##### `ResetMinimumPasswordLength` <a name="ResetMinimumPasswordLength" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetMinimumPasswordLength"></a>

```go
func ResetMinimumPasswordLength()
```

##### `ResetNumberOfRecentPasswordsDisallowed` <a name="ResetNumberOfRecentPasswordsDisallowed" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetNumberOfRecentPasswordsDisallowed"></a>

```go
func ResetNumberOfRecentPasswordsDisallowed()
```

##### `ResetPasswordNotUsernameOrInvert` <a name="ResetPasswordNotUsernameOrInvert" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetPasswordNotUsernameOrInvert"></a>

```go
func ResetPasswordNotUsernameOrInvert()
```

##### `ResetPasswordValidityPeriod` <a name="ResetPasswordValidityPeriod" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.resetPasswordValidityPeriod"></a>

```go
func ResetPasswordValidityPeriod()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityPasswordPolicyV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/identitypasswordpolicyv3"

identitypasswordpolicyv3.IdentityPasswordPolicyV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/identitypasswordpolicyv3"

identitypasswordpolicyv3.IdentityPasswordPolicyV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/identitypasswordpolicyv3"

identitypasswordpolicyv3.IdentityPasswordPolicyV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/identitypasswordpolicyv3"

identitypasswordpolicyv3.IdentityPasswordPolicyV3_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IdentityPasswordPolicyV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdentityPasswordPolicyV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdentityPasswordPolicyV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/identity_password_policy_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IdentityPasswordPolicyV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.maximumPasswordLength">MaximumPasswordLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordRequirements">PasswordRequirements</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.maximumConsecutiveIdenticalCharsInput">MaximumConsecutiveIdenticalCharsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.minimumPasswordAgeInput">MinimumPasswordAgeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.minimumPasswordLengthInput">MinimumPasswordLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.numberOfRecentPasswordsDisallowedInput">NumberOfRecentPasswordsDisallowedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordNotUsernameOrInvertInput">PasswordNotUsernameOrInvertInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordValidityPeriodInput">PasswordValidityPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.maximumConsecutiveIdenticalChars">MaximumConsecutiveIdenticalChars</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.minimumPasswordAge">MinimumPasswordAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.numberOfRecentPasswordsDisallowed">NumberOfRecentPasswordsDisallowed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordNotUsernameOrInvert">PasswordNotUsernameOrInvert</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordValidityPeriod">PasswordValidityPeriod</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MaximumPasswordLength`<sup>Required</sup> <a name="MaximumPasswordLength" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.maximumPasswordLength"></a>

```go
func MaximumPasswordLength() *f64
```

- *Type:* *f64

---

##### `PasswordRequirements`<sup>Required</sup> <a name="PasswordRequirements" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordRequirements"></a>

```go
func PasswordRequirements() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaximumConsecutiveIdenticalCharsInput`<sup>Optional</sup> <a name="MaximumConsecutiveIdenticalCharsInput" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.maximumConsecutiveIdenticalCharsInput"></a>

```go
func MaximumConsecutiveIdenticalCharsInput() *f64
```

- *Type:* *f64

---

##### `MinimumPasswordAgeInput`<sup>Optional</sup> <a name="MinimumPasswordAgeInput" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.minimumPasswordAgeInput"></a>

```go
func MinimumPasswordAgeInput() *f64
```

- *Type:* *f64

---

##### `MinimumPasswordLengthInput`<sup>Optional</sup> <a name="MinimumPasswordLengthInput" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.minimumPasswordLengthInput"></a>

```go
func MinimumPasswordLengthInput() *f64
```

- *Type:* *f64

---

##### `NumberOfRecentPasswordsDisallowedInput`<sup>Optional</sup> <a name="NumberOfRecentPasswordsDisallowedInput" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.numberOfRecentPasswordsDisallowedInput"></a>

```go
func NumberOfRecentPasswordsDisallowedInput() *f64
```

- *Type:* *f64

---

##### `PasswordNotUsernameOrInvertInput`<sup>Optional</sup> <a name="PasswordNotUsernameOrInvertInput" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordNotUsernameOrInvertInput"></a>

```go
func PasswordNotUsernameOrInvertInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordValidityPeriodInput`<sup>Optional</sup> <a name="PasswordValidityPeriodInput" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordValidityPeriodInput"></a>

```go
func PasswordValidityPeriodInput() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaximumConsecutiveIdenticalChars`<sup>Required</sup> <a name="MaximumConsecutiveIdenticalChars" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.maximumConsecutiveIdenticalChars"></a>

```go
func MaximumConsecutiveIdenticalChars() *f64
```

- *Type:* *f64

---

##### `MinimumPasswordAge`<sup>Required</sup> <a name="MinimumPasswordAge" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.minimumPasswordAge"></a>

```go
func MinimumPasswordAge() *f64
```

- *Type:* *f64

---

##### `MinimumPasswordLength`<sup>Required</sup> <a name="MinimumPasswordLength" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.minimumPasswordLength"></a>

```go
func MinimumPasswordLength() *f64
```

- *Type:* *f64

---

##### `NumberOfRecentPasswordsDisallowed`<sup>Required</sup> <a name="NumberOfRecentPasswordsDisallowed" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.numberOfRecentPasswordsDisallowed"></a>

```go
func NumberOfRecentPasswordsDisallowed() *f64
```

- *Type:* *f64

---

##### `PasswordNotUsernameOrInvert`<sup>Required</sup> <a name="PasswordNotUsernameOrInvert" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordNotUsernameOrInvert"></a>

```go
func PasswordNotUsernameOrInvert() interface{}
```

- *Type:* interface{}

---

##### `PasswordValidityPeriod`<sup>Required</sup> <a name="PasswordValidityPeriod" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.passwordValidityPeriod"></a>

```go
func PasswordValidityPeriod() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPasswordPolicyV3Config <a name="IdentityPasswordPolicyV3Config" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/identitypasswordpolicyv3"

&identitypasswordpolicyv3.IdentityPasswordPolicyV3Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	MaximumConsecutiveIdenticalChars: *f64,
	MinimumPasswordAge: *f64,
	MinimumPasswordLength: *f64,
	NumberOfRecentPasswordsDisallowed: *f64,
	PasswordNotUsernameOrInvert: interface{},
	PasswordValidityPeriod: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/identity_password_policy_v3#id IdentityPasswordPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.maximumConsecutiveIdenticalChars">MaximumConsecutiveIdenticalChars</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/identity_password_policy_v3#maximum_consecutive_identical_chars IdentityPasswordPolicyV3#maximum_consecutive_identical_chars}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.minimumPasswordAge">MinimumPasswordAge</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/identity_password_policy_v3#minimum_password_age IdentityPasswordPolicyV3#minimum_password_age}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/identity_password_policy_v3#minimum_password_length IdentityPasswordPolicyV3#minimum_password_length}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.numberOfRecentPasswordsDisallowed">NumberOfRecentPasswordsDisallowed</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/identity_password_policy_v3#number_of_recent_passwords_disallowed IdentityPasswordPolicyV3#number_of_recent_passwords_disallowed}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.passwordNotUsernameOrInvert">PasswordNotUsernameOrInvert</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/identity_password_policy_v3#password_not_username_or_invert IdentityPasswordPolicyV3#password_not_username_or_invert}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.passwordValidityPeriod">PasswordValidityPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/identity_password_policy_v3#password_validity_period IdentityPasswordPolicyV3#password_validity_period}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/identity_password_policy_v3#id IdentityPasswordPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaximumConsecutiveIdenticalChars`<sup>Optional</sup> <a name="MaximumConsecutiveIdenticalChars" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.maximumConsecutiveIdenticalChars"></a>

```go
MaximumConsecutiveIdenticalChars *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/identity_password_policy_v3#maximum_consecutive_identical_chars IdentityPasswordPolicyV3#maximum_consecutive_identical_chars}.

---

##### `MinimumPasswordAge`<sup>Optional</sup> <a name="MinimumPasswordAge" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.minimumPasswordAge"></a>

```go
MinimumPasswordAge *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/identity_password_policy_v3#minimum_password_age IdentityPasswordPolicyV3#minimum_password_age}.

---

##### `MinimumPasswordLength`<sup>Optional</sup> <a name="MinimumPasswordLength" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.minimumPasswordLength"></a>

```go
MinimumPasswordLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/identity_password_policy_v3#minimum_password_length IdentityPasswordPolicyV3#minimum_password_length}.

---

##### `NumberOfRecentPasswordsDisallowed`<sup>Optional</sup> <a name="NumberOfRecentPasswordsDisallowed" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.numberOfRecentPasswordsDisallowed"></a>

```go
NumberOfRecentPasswordsDisallowed *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/identity_password_policy_v3#number_of_recent_passwords_disallowed IdentityPasswordPolicyV3#number_of_recent_passwords_disallowed}.

---

##### `PasswordNotUsernameOrInvert`<sup>Optional</sup> <a name="PasswordNotUsernameOrInvert" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.passwordNotUsernameOrInvert"></a>

```go
PasswordNotUsernameOrInvert interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/identity_password_policy_v3#password_not_username_or_invert IdentityPasswordPolicyV3#password_not_username_or_invert}.

---

##### `PasswordValidityPeriod`<sup>Optional</sup> <a name="PasswordValidityPeriod" id="@cdktf/provider-opentelekomcloud.identityPasswordPolicyV3.IdentityPasswordPolicyV3Config.property.passwordValidityPeriod"></a>

```go
PasswordValidityPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.2/docs/resources/identity_password_policy_v3#password_validity_period IdentityPasswordPolicyV3#password_validity_period}.

---



