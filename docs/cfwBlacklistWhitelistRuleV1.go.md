# `cfwBlacklistWhitelistRuleV1` Submodule <a name="`cfwBlacklistWhitelistRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfwBlacklistWhitelistRuleV1 <a name="CfwBlacklistWhitelistRuleV1" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1 opentelekomcloud_cfw_blacklist_whitelist_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwblacklistwhitelistrulev1"

cfwblacklistwhitelistrulev1.NewCfwBlacklistWhitelistRuleV1(scope Construct, id *string, config CfwBlacklistWhitelistRuleV1Config) CfwBlacklistWhitelistRuleV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config">CfwBlacklistWhitelistRuleV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config">CfwBlacklistWhitelistRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.putTimeouts"></a>

```go
func PutTimeouts(value CfwBlacklistWhitelistRuleV1Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts">CfwBlacklistWhitelistRuleV1Timeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CfwBlacklistWhitelistRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwblacklistwhitelistrulev1"

cfwblacklistwhitelistrulev1.CfwBlacklistWhitelistRuleV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwblacklistwhitelistrulev1"

cfwblacklistwhitelistrulev1.CfwBlacklistWhitelistRuleV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwblacklistwhitelistrulev1"

cfwblacklistwhitelistrulev1.CfwBlacklistWhitelistRuleV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwblacklistwhitelistrulev1"

cfwblacklistwhitelistrulev1.CfwBlacklistWhitelistRuleV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CfwBlacklistWhitelistRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CfwBlacklistWhitelistRuleV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CfwBlacklistWhitelistRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CfwBlacklistWhitelistRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference">CfwBlacklistWhitelistRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.addressTypeInput">AddressTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.directionInput">DirectionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.listTypeInput">ListTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.protocolInput">ProtocolInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.addressType">AddressType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.direction">Direction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.listType">ListType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.protocol">Protocol</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.timeouts"></a>

```go
func Timeouts() CfwBlacklistWhitelistRuleV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference">CfwBlacklistWhitelistRuleV1TimeoutsOutputReference</a>

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `AddressTypeInput`<sup>Optional</sup> <a name="AddressTypeInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.addressTypeInput"></a>

```go
func AddressTypeInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.directionInput"></a>

```go
func DirectionInput() *f64
```

- *Type:* *f64

---

##### `ListTypeInput`<sup>Optional</sup> <a name="ListTypeInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.listTypeInput"></a>

```go
func ListTypeInput() *f64
```

- *Type:* *f64

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.protocolInput"></a>

```go
func ProtocolInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `AddressType`<sup>Required</sup> <a name="AddressType" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.addressType"></a>

```go
func AddressType() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.direction"></a>

```go
func Direction() *f64
```

- *Type:* *f64

---

##### `ListType`<sup>Required</sup> <a name="ListType" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.listType"></a>

```go
func ListType() *f64
```

- *Type:* *f64

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.protocol"></a>

```go
func Protocol() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CfwBlacklistWhitelistRuleV1Config <a name="CfwBlacklistWhitelistRuleV1Config" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwblacklistwhitelistrulev1"

&cfwblacklistwhitelistrulev1.CfwBlacklistWhitelistRuleV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Address: *string,
	AddressType: *f64,
	Direction: *f64,
	ListType: *f64,
	ObjectId: *string,
	Port: *string,
	Protocol: *f64,
	Description: *string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#address CfwBlacklistWhitelistRuleV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.addressType">AddressType</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#address_type CfwBlacklistWhitelistRuleV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.direction">Direction</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#direction CfwBlacklistWhitelistRuleV1#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.listType">ListType</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#list_type CfwBlacklistWhitelistRuleV1#list_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#object_id CfwBlacklistWhitelistRuleV1#object_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.port">Port</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#port CfwBlacklistWhitelistRuleV1#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.protocol">Protocol</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#protocol CfwBlacklistWhitelistRuleV1#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#description CfwBlacklistWhitelistRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts">CfwBlacklistWhitelistRuleV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#address CfwBlacklistWhitelistRuleV1#address}.

---

##### `AddressType`<sup>Required</sup> <a name="AddressType" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.addressType"></a>

```go
AddressType *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#address_type CfwBlacklistWhitelistRuleV1#address_type}.

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.direction"></a>

```go
Direction *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#direction CfwBlacklistWhitelistRuleV1#direction}.

---

##### `ListType`<sup>Required</sup> <a name="ListType" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.listType"></a>

```go
ListType *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#list_type CfwBlacklistWhitelistRuleV1#list_type}.

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#object_id CfwBlacklistWhitelistRuleV1#object_id}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.port"></a>

```go
Port *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#port CfwBlacklistWhitelistRuleV1#port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.protocol"></a>

```go
Protocol *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#protocol CfwBlacklistWhitelistRuleV1#protocol}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#description CfwBlacklistWhitelistRuleV1#description}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.timeouts"></a>

```go
Timeouts CfwBlacklistWhitelistRuleV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts">CfwBlacklistWhitelistRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#timeouts CfwBlacklistWhitelistRuleV1#timeouts}

---

### CfwBlacklistWhitelistRuleV1Timeouts <a name="CfwBlacklistWhitelistRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwblacklistwhitelistrulev1"

&cfwblacklistwhitelistrulev1.CfwBlacklistWhitelistRuleV1Timeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#create CfwBlacklistWhitelistRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#delete CfwBlacklistWhitelistRuleV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#update CfwBlacklistWhitelistRuleV1#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#create CfwBlacklistWhitelistRuleV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#delete CfwBlacklistWhitelistRuleV1#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cfw_blacklist_whitelist_rule_v1#update CfwBlacklistWhitelistRuleV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CfwBlacklistWhitelistRuleV1TimeoutsOutputReference <a name="CfwBlacklistWhitelistRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwblacklistwhitelistrulev1"

cfwblacklistwhitelistrulev1.NewCfwBlacklistWhitelistRuleV1TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CfwBlacklistWhitelistRuleV1TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



