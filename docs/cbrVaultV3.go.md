# `cbrVaultV3` Submodule <a name="`cbrVaultV3` Submodule" id="@cdktf/provider-opentelekomcloud.cbrVaultV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CbrVaultV3 <a name="CbrVaultV3" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3 opentelekomcloud_cbr_vault_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cbrvaultv3"

cbrvaultv3.NewCbrVaultV3(scope Construct, id *string, config CbrVaultV3Config) CbrVaultV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config">CbrVaultV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config">CbrVaultV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling">PutBilling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBindRules">PutBindRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putResource">PutResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoBind">ResetAutoBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoExpand">ResetAutoExpand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBackupPolicyId">ResetBackupPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBindRules">ResetBindRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetEnterpriseProjectId">ResetEnterpriseProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetResource">ResetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBilling` <a name="PutBilling" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling"></a>

```go
func PutBilling(value CbrVaultV3Billing)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

---

##### `PutBindRules` <a name="PutBindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBindRules"></a>

```go
func PutBindRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBindRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResource` <a name="PutResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putResource"></a>

```go
func PutResource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putResource.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoBind` <a name="ResetAutoBind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoBind"></a>

```go
func ResetAutoBind()
```

##### `ResetAutoExpand` <a name="ResetAutoExpand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoExpand"></a>

```go
func ResetAutoExpand()
```

##### `ResetBackupPolicyId` <a name="ResetBackupPolicyId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBackupPolicyId"></a>

```go
func ResetBackupPolicyId()
```

##### `ResetBindRules` <a name="ResetBindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBindRules"></a>

```go
func ResetBindRules()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnterpriseProjectId` <a name="ResetEnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetEnterpriseProjectId"></a>

```go
func ResetEnterpriseProjectId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetId"></a>

```go
func ResetId()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetResource"></a>

```go
func ResetResource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cbrvaultv3"

cbrvaultv3.CbrVaultV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cbrvaultv3"

cbrvaultv3.CbrVaultV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cbrvaultv3"

cbrvaultv3.CbrVaultV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billing">Billing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference">CbrVaultV3BillingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRules">BindRules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList">CbrVaultV3BindRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.providerId">ProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resource">Resource</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList">CbrVaultV3ResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBindInput">AutoBindInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpandInput">AutoExpandInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyIdInput">BackupPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billingInput">BillingInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRulesInput">BindRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectIdInput">EnterpriseProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resourceInput">ResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBind">AutoBind</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpand">AutoExpand</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyId">BackupPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Billing`<sup>Required</sup> <a name="Billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billing"></a>

```go
func Billing() CbrVaultV3BillingOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference">CbrVaultV3BillingOutputReference</a>

---

##### `BindRules`<sup>Required</sup> <a name="BindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRules"></a>

```go
func BindRules() CbrVaultV3BindRulesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList">CbrVaultV3BindRulesList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.providerId"></a>

```go
func ProviderId() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resource"></a>

```go
func Resource() CbrVaultV3ResourceList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList">CbrVaultV3ResourceList</a>

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `AutoBindInput`<sup>Optional</sup> <a name="AutoBindInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBindInput"></a>

```go
func AutoBindInput() interface{}
```

- *Type:* interface{}

---

##### `AutoExpandInput`<sup>Optional</sup> <a name="AutoExpandInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpandInput"></a>

```go
func AutoExpandInput() interface{}
```

- *Type:* interface{}

---

##### `BackupPolicyIdInput`<sup>Optional</sup> <a name="BackupPolicyIdInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyIdInput"></a>

```go
func BackupPolicyIdInput() *string
```

- *Type:* *string

---

##### `BillingInput`<sup>Optional</sup> <a name="BillingInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billingInput"></a>

```go
func BillingInput() CbrVaultV3Billing
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

---

##### `BindRulesInput`<sup>Optional</sup> <a name="BindRulesInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRulesInput"></a>

```go
func BindRulesInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnterpriseProjectIdInput`<sup>Optional</sup> <a name="EnterpriseProjectIdInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectIdInput"></a>

```go
func EnterpriseProjectIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resourceInput"></a>

```go
func ResourceInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AutoBind`<sup>Required</sup> <a name="AutoBind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBind"></a>

```go
func AutoBind() interface{}
```

- *Type:* interface{}

---

##### `AutoExpand`<sup>Required</sup> <a name="AutoExpand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpand"></a>

```go
func AutoExpand() interface{}
```

- *Type:* interface{}

---

##### `BackupPolicyId`<sup>Required</sup> <a name="BackupPolicyId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyId"></a>

```go
func BackupPolicyId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnterpriseProjectId`<sup>Required</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectId"></a>

```go
func EnterpriseProjectId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CbrVaultV3Billing <a name="CbrVaultV3Billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cbrvaultv3"

&cbrvaultv3.CbrVaultV3Billing {
	ObjectType: *string,
	ProtectType: *string,
	Size: *f64,
	ChargingMode: *string,
	CloudType: *string,
	ConsistentLevel: *string,
	ConsoleUrl: *string,
	ExtraInfo: *map[string]*string,
	IsAutoPay: interface{},
	IsAutoRenew: interface{},
	PeriodNum: *f64,
	PeriodType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.objectType">ObjectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#object_type CbrVaultV3#object_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.protectType">ProtectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#protect_type CbrVaultV3#protect_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#size CbrVaultV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.chargingMode">ChargingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#charging_mode CbrVaultV3#charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.cloudType">CloudType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#cloud_type CbrVaultV3#cloud_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consistentLevel">ConsistentLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#consistent_level CbrVaultV3#consistent_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consoleUrl">ConsoleUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#console_url CbrVaultV3#console_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.extraInfo">ExtraInfo</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#extra_info CbrVaultV3#extra_info}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoPay">IsAutoPay</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#is_auto_pay CbrVaultV3#is_auto_pay}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoRenew">IsAutoRenew</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#is_auto_renew CbrVaultV3#is_auto_renew}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodNum">PeriodNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#period_num CbrVaultV3#period_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodType">PeriodType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#period_type CbrVaultV3#period_type}. |

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.objectType"></a>

```go
ObjectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#object_type CbrVaultV3#object_type}.

---

##### `ProtectType`<sup>Required</sup> <a name="ProtectType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.protectType"></a>

```go
ProtectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#protect_type CbrVaultV3#protect_type}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#size CbrVaultV3#size}.

---

##### `ChargingMode`<sup>Optional</sup> <a name="ChargingMode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.chargingMode"></a>

```go
ChargingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#charging_mode CbrVaultV3#charging_mode}.

---

##### `CloudType`<sup>Optional</sup> <a name="CloudType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.cloudType"></a>

```go
CloudType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#cloud_type CbrVaultV3#cloud_type}.

---

##### `ConsistentLevel`<sup>Optional</sup> <a name="ConsistentLevel" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consistentLevel"></a>

```go
ConsistentLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#consistent_level CbrVaultV3#consistent_level}.

---

##### `ConsoleUrl`<sup>Optional</sup> <a name="ConsoleUrl" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consoleUrl"></a>

```go
ConsoleUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#console_url CbrVaultV3#console_url}.

---

##### `ExtraInfo`<sup>Optional</sup> <a name="ExtraInfo" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.extraInfo"></a>

```go
ExtraInfo *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#extra_info CbrVaultV3#extra_info}.

---

##### `IsAutoPay`<sup>Optional</sup> <a name="IsAutoPay" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoPay"></a>

```go
IsAutoPay interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#is_auto_pay CbrVaultV3#is_auto_pay}.

---

##### `IsAutoRenew`<sup>Optional</sup> <a name="IsAutoRenew" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoRenew"></a>

```go
IsAutoRenew interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#is_auto_renew CbrVaultV3#is_auto_renew}.

---

##### `PeriodNum`<sup>Optional</sup> <a name="PeriodNum" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodNum"></a>

```go
PeriodNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#period_num CbrVaultV3#period_num}.

---

##### `PeriodType`<sup>Optional</sup> <a name="PeriodType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodType"></a>

```go
PeriodType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#period_type CbrVaultV3#period_type}.

---

### CbrVaultV3BindRules <a name="CbrVaultV3BindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cbrvaultv3"

&cbrvaultv3.CbrVaultV3BindRules {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#key CbrVaultV3#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#value CbrVaultV3#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#key CbrVaultV3#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#value CbrVaultV3#value}.

---

### CbrVaultV3Config <a name="CbrVaultV3Config" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cbrvaultv3"

&cbrvaultv3.CbrVaultV3Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Billing: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.cbrVaultV3.CbrVaultV3Billing,
	Name: *string,
	AutoBind: interface{},
	AutoExpand: interface{},
	BackupPolicyId: *string,
	BindRules: interface{},
	Description: *string,
	EnterpriseProjectId: *string,
	Id: *string,
	Resource: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.billing">Billing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | billing block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#name CbrVaultV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoBind">AutoBind</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#auto_bind CbrVaultV3#auto_bind}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoExpand">AutoExpand</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#auto_expand CbrVaultV3#auto_expand}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.backupPolicyId">BackupPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#backup_policy_id CbrVaultV3#backup_policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.bindRules">BindRules</a></code> | <code>interface{}</code> | bind_rules block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#description CbrVaultV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#enterprise_project_id CbrVaultV3#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#id CbrVaultV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.resource">Resource</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#resource CbrVaultV3#resource}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#tags CbrVaultV3#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Billing`<sup>Required</sup> <a name="Billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.billing"></a>

```go
Billing CbrVaultV3Billing
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

billing block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#billing CbrVaultV3#billing}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#name CbrVaultV3#name}.

---

##### `AutoBind`<sup>Optional</sup> <a name="AutoBind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoBind"></a>

```go
AutoBind interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#auto_bind CbrVaultV3#auto_bind}.

---

##### `AutoExpand`<sup>Optional</sup> <a name="AutoExpand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoExpand"></a>

```go
AutoExpand interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#auto_expand CbrVaultV3#auto_expand}.

---

##### `BackupPolicyId`<sup>Optional</sup> <a name="BackupPolicyId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.backupPolicyId"></a>

```go
BackupPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#backup_policy_id CbrVaultV3#backup_policy_id}.

---

##### `BindRules`<sup>Optional</sup> <a name="BindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.bindRules"></a>

```go
BindRules interface{}
```

- *Type:* interface{}

bind_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#bind_rules CbrVaultV3#bind_rules}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#description CbrVaultV3#description}.

---

##### `EnterpriseProjectId`<sup>Optional</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.enterpriseProjectId"></a>

```go
EnterpriseProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#enterprise_project_id CbrVaultV3#enterprise_project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#id CbrVaultV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.resource"></a>

```go
Resource interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#resource CbrVaultV3#resource}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#tags CbrVaultV3#tags}.

---

### CbrVaultV3Resource <a name="CbrVaultV3Resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cbrvaultv3"

&cbrvaultv3.CbrVaultV3Resource {
	BackupCount: *f64,
	BackupSize: *f64,
	ExcludeVolumes: *[]*string,
	Id: *string,
	IncludeVolumes: *[]*string,
	Name: *string,
	ProtectStatus: *string,
	Size: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupCount">BackupCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#backup_count CbrVaultV3#backup_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupSize">BackupSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#backup_size CbrVaultV3#backup_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.excludeVolumes">ExcludeVolumes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#exclude_volumes CbrVaultV3#exclude_volumes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#id CbrVaultV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.includeVolumes">IncludeVolumes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#include_volumes CbrVaultV3#include_volumes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#name CbrVaultV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.protectStatus">ProtectStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#protect_status CbrVaultV3#protect_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#size CbrVaultV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#type CbrVaultV3#type}. |

---

##### `BackupCount`<sup>Optional</sup> <a name="BackupCount" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupCount"></a>

```go
BackupCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#backup_count CbrVaultV3#backup_count}.

---

##### `BackupSize`<sup>Optional</sup> <a name="BackupSize" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupSize"></a>

```go
BackupSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#backup_size CbrVaultV3#backup_size}.

---

##### `ExcludeVolumes`<sup>Optional</sup> <a name="ExcludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.excludeVolumes"></a>

```go
ExcludeVolumes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#exclude_volumes CbrVaultV3#exclude_volumes}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#id CbrVaultV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeVolumes`<sup>Optional</sup> <a name="IncludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.includeVolumes"></a>

```go
IncludeVolumes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#include_volumes CbrVaultV3#include_volumes}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#name CbrVaultV3#name}.

---

##### `ProtectStatus`<sup>Optional</sup> <a name="ProtectStatus" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.protectStatus"></a>

```go
ProtectStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#protect_status CbrVaultV3#protect_status}.

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#size CbrVaultV3#size}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3#type CbrVaultV3#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### CbrVaultV3BillingOutputReference <a name="CbrVaultV3BillingOutputReference" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cbrvaultv3"

cbrvaultv3.NewCbrVaultV3BillingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CbrVaultV3BillingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetChargingMode">ResetChargingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetCloudType">ResetCloudType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsistentLevel">ResetConsistentLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsoleUrl">ResetConsoleUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetExtraInfo">ResetExtraInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoPay">ResetIsAutoPay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoRenew">ResetIsAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodNum">ResetPeriodNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodType">ResetPeriodType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChargingMode` <a name="ResetChargingMode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetChargingMode"></a>

```go
func ResetChargingMode()
```

##### `ResetCloudType` <a name="ResetCloudType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetCloudType"></a>

```go
func ResetCloudType()
```

##### `ResetConsistentLevel` <a name="ResetConsistentLevel" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsistentLevel"></a>

```go
func ResetConsistentLevel()
```

##### `ResetConsoleUrl` <a name="ResetConsoleUrl" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsoleUrl"></a>

```go
func ResetConsoleUrl()
```

##### `ResetExtraInfo` <a name="ResetExtraInfo" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetExtraInfo"></a>

```go
func ResetExtraInfo()
```

##### `ResetIsAutoPay` <a name="ResetIsAutoPay" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoPay"></a>

```go
func ResetIsAutoPay()
```

##### `ResetIsAutoRenew` <a name="ResetIsAutoRenew" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoRenew"></a>

```go
func ResetIsAutoRenew()
```

##### `ResetPeriodNum` <a name="ResetPeriodNum" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodNum"></a>

```go
func ResetPeriodNum()
```

##### `ResetPeriodType` <a name="ResetPeriodType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodType"></a>

```go
func ResetPeriodType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.allocated">Allocated</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.frozenScene">FrozenScene</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.orderId">OrderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.specCode">SpecCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.storageUnit">StorageUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.used">Used</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingModeInput">ChargingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudTypeInput">CloudTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevelInput">ConsistentLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrlInput">ConsoleUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfoInput">ExtraInfoInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPayInput">IsAutoPayInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenewInput">IsAutoRenewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectTypeInput">ObjectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNumInput">PeriodNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodTypeInput">PeriodTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectTypeInput">ProtectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingMode">ChargingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudType">CloudType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevel">ConsistentLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrl">ConsoleUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfo">ExtraInfo</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPay">IsAutoPay</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenew">IsAutoRenew</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNum">PeriodNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodType">PeriodType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectType">ProtectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Allocated`<sup>Required</sup> <a name="Allocated" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.allocated"></a>

```go
func Allocated() *f64
```

- *Type:* *f64

---

##### `FrozenScene`<sup>Required</sup> <a name="FrozenScene" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.frozenScene"></a>

```go
func FrozenScene() *string
```

- *Type:* *string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.orderId"></a>

```go
func OrderId() *string
```

- *Type:* *string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

##### `SpecCode`<sup>Required</sup> <a name="SpecCode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.specCode"></a>

```go
func SpecCode() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorageUnit`<sup>Required</sup> <a name="StorageUnit" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.storageUnit"></a>

```go
func StorageUnit() *string
```

- *Type:* *string

---

##### `Used`<sup>Required</sup> <a name="Used" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.used"></a>

```go
func Used() *f64
```

- *Type:* *f64

---

##### `ChargingModeInput`<sup>Optional</sup> <a name="ChargingModeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingModeInput"></a>

```go
func ChargingModeInput() *string
```

- *Type:* *string

---

##### `CloudTypeInput`<sup>Optional</sup> <a name="CloudTypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudTypeInput"></a>

```go
func CloudTypeInput() *string
```

- *Type:* *string

---

##### `ConsistentLevelInput`<sup>Optional</sup> <a name="ConsistentLevelInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevelInput"></a>

```go
func ConsistentLevelInput() *string
```

- *Type:* *string

---

##### `ConsoleUrlInput`<sup>Optional</sup> <a name="ConsoleUrlInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrlInput"></a>

```go
func ConsoleUrlInput() *string
```

- *Type:* *string

---

##### `ExtraInfoInput`<sup>Optional</sup> <a name="ExtraInfoInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfoInput"></a>

```go
func ExtraInfoInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IsAutoPayInput`<sup>Optional</sup> <a name="IsAutoPayInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPayInput"></a>

```go
func IsAutoPayInput() interface{}
```

- *Type:* interface{}

---

##### `IsAutoRenewInput`<sup>Optional</sup> <a name="IsAutoRenewInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenewInput"></a>

```go
func IsAutoRenewInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectTypeInput"></a>

```go
func ObjectTypeInput() *string
```

- *Type:* *string

---

##### `PeriodNumInput`<sup>Optional</sup> <a name="PeriodNumInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNumInput"></a>

```go
func PeriodNumInput() *f64
```

- *Type:* *f64

---

##### `PeriodTypeInput`<sup>Optional</sup> <a name="PeriodTypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodTypeInput"></a>

```go
func PeriodTypeInput() *string
```

- *Type:* *string

---

##### `ProtectTypeInput`<sup>Optional</sup> <a name="ProtectTypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectTypeInput"></a>

```go
func ProtectTypeInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `ChargingMode`<sup>Required</sup> <a name="ChargingMode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingMode"></a>

```go
func ChargingMode() *string
```

- *Type:* *string

---

##### `CloudType`<sup>Required</sup> <a name="CloudType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudType"></a>

```go
func CloudType() *string
```

- *Type:* *string

---

##### `ConsistentLevel`<sup>Required</sup> <a name="ConsistentLevel" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevel"></a>

```go
func ConsistentLevel() *string
```

- *Type:* *string

---

##### `ConsoleUrl`<sup>Required</sup> <a name="ConsoleUrl" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrl"></a>

```go
func ConsoleUrl() *string
```

- *Type:* *string

---

##### `ExtraInfo`<sup>Required</sup> <a name="ExtraInfo" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfo"></a>

```go
func ExtraInfo() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IsAutoPay`<sup>Required</sup> <a name="IsAutoPay" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPay"></a>

```go
func IsAutoPay() interface{}
```

- *Type:* interface{}

---

##### `IsAutoRenew`<sup>Required</sup> <a name="IsAutoRenew" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenew"></a>

```go
func IsAutoRenew() interface{}
```

- *Type:* interface{}

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `PeriodNum`<sup>Required</sup> <a name="PeriodNum" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNum"></a>

```go
func PeriodNum() *f64
```

- *Type:* *f64

---

##### `PeriodType`<sup>Required</sup> <a name="PeriodType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodType"></a>

```go
func PeriodType() *string
```

- *Type:* *string

---

##### `ProtectType`<sup>Required</sup> <a name="ProtectType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectType"></a>

```go
func ProtectType() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.internalValue"></a>

```go
func InternalValue() CbrVaultV3Billing
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

---


### CbrVaultV3BindRulesList <a name="CbrVaultV3BindRulesList" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cbrvaultv3"

cbrvaultv3.NewCbrVaultV3BindRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CbrVaultV3BindRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.get"></a>

```go
func Get(index *f64) CbrVaultV3BindRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CbrVaultV3BindRulesOutputReference <a name="CbrVaultV3BindRulesOutputReference" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cbrvaultv3"

cbrvaultv3.NewCbrVaultV3BindRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CbrVaultV3BindRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CbrVaultV3ResourceList <a name="CbrVaultV3ResourceList" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cbrvaultv3"

cbrvaultv3.NewCbrVaultV3ResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CbrVaultV3ResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.get"></a>

```go
func Get(index *f64) CbrVaultV3ResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CbrVaultV3ResourceOutputReference <a name="CbrVaultV3ResourceOutputReference" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cbrvaultv3"

cbrvaultv3.NewCbrVaultV3ResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CbrVaultV3ResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupCount">ResetBackupCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupSize">ResetBackupSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetExcludeVolumes">ResetExcludeVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetIncludeVolumes">ResetIncludeVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetProtectStatus">ResetProtectStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupCount` <a name="ResetBackupCount" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupCount"></a>

```go
func ResetBackupCount()
```

##### `ResetBackupSize` <a name="ResetBackupSize" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupSize"></a>

```go
func ResetBackupSize()
```

##### `ResetExcludeVolumes` <a name="ResetExcludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetExcludeVolumes"></a>

```go
func ResetExcludeVolumes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeVolumes` <a name="ResetIncludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetIncludeVolumes"></a>

```go
func ResetIncludeVolumes()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetProtectStatus` <a name="ResetProtectStatus" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetProtectStatus"></a>

```go
func ResetProtectStatus()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetSize"></a>

```go
func ResetSize()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCountInput">BackupCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSizeInput">BackupSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumesInput">ExcludeVolumesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumesInput">IncludeVolumesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatusInput">ProtectStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCount">BackupCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSize">BackupSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumes">ExcludeVolumes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumes">IncludeVolumes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatus">ProtectStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupCountInput`<sup>Optional</sup> <a name="BackupCountInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCountInput"></a>

```go
func BackupCountInput() *f64
```

- *Type:* *f64

---

##### `BackupSizeInput`<sup>Optional</sup> <a name="BackupSizeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSizeInput"></a>

```go
func BackupSizeInput() *f64
```

- *Type:* *f64

---

##### `ExcludeVolumesInput`<sup>Optional</sup> <a name="ExcludeVolumesInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumesInput"></a>

```go
func ExcludeVolumesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeVolumesInput`<sup>Optional</sup> <a name="IncludeVolumesInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumesInput"></a>

```go
func IncludeVolumesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtectStatusInput`<sup>Optional</sup> <a name="ProtectStatusInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatusInput"></a>

```go
func ProtectStatusInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `BackupCount`<sup>Required</sup> <a name="BackupCount" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCount"></a>

```go
func BackupCount() *f64
```

- *Type:* *f64

---

##### `BackupSize`<sup>Required</sup> <a name="BackupSize" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSize"></a>

```go
func BackupSize() *f64
```

- *Type:* *f64

---

##### `ExcludeVolumes`<sup>Required</sup> <a name="ExcludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumes"></a>

```go
func ExcludeVolumes() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeVolumes`<sup>Required</sup> <a name="IncludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumes"></a>

```go
func IncludeVolumes() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProtectStatus`<sup>Required</sup> <a name="ProtectStatus" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatus"></a>

```go
func ProtectStatus() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



