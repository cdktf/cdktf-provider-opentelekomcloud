# `enterpriseVpnCustomerGatewayV5` Submodule <a name="`enterpriseVpnCustomerGatewayV5` Submodule" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseVpnCustomerGatewayV5 <a name="EnterpriseVpnCustomerGatewayV5" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/enterprise_vpn_customer_gateway_v5 opentelekomcloud_enterprise_vpn_customer_gateway_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpncustomergatewayv5"

enterprisevpncustomergatewayv5.NewEnterpriseVpnCustomerGatewayV5(scope Construct, id *string, config EnterpriseVpnCustomerGatewayV5Config) EnterpriseVpnCustomerGatewayV5
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config">EnterpriseVpnCustomerGatewayV5Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config">EnterpriseVpnCustomerGatewayV5Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetAsn">ResetAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetIdType">ResetIdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetIdValue">ResetIdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAsn` <a name="ResetAsn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetAsn"></a>

```go
func ResetAsn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetId"></a>

```go
func ResetId()
```

##### `ResetIdType` <a name="ResetIdType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetIdType"></a>

```go
func ResetIdType()
```

##### `ResetIdValue` <a name="ResetIdValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetIdValue"></a>

```go
func ResetIdValue()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseVpnCustomerGatewayV5 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpncustomergatewayv5"

enterprisevpncustomergatewayv5.EnterpriseVpnCustomerGatewayV5_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpncustomergatewayv5"

enterprisevpncustomergatewayv5.EnterpriseVpnCustomerGatewayV5_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpncustomergatewayv5"

enterprisevpncustomergatewayv5.EnterpriseVpnCustomerGatewayV5_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpncustomergatewayv5"

enterprisevpncustomergatewayv5.EnterpriseVpnCustomerGatewayV5_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EnterpriseVpnCustomerGatewayV5 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EnterpriseVpnCustomerGatewayV5 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EnterpriseVpnCustomerGatewayV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/enterprise_vpn_customer_gateway_v5#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseVpnCustomerGatewayV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.routeMode">RouteMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.asnInput">AsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idTypeInput">IdTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idValueInput">IdValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.asn">Asn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idType">IdType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idValue">IdValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RouteMode`<sup>Required</sup> <a name="RouteMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.routeMode"></a>

```go
func RouteMode() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.asnInput"></a>

```go
func AsnInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdTypeInput`<sup>Optional</sup> <a name="IdTypeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idTypeInput"></a>

```go
func IdTypeInput() *string
```

- *Type:* *string

---

##### `IdValueInput`<sup>Optional</sup> <a name="IdValueInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idValueInput"></a>

```go
func IdValueInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.asn"></a>

```go
func Asn() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdType`<sup>Required</sup> <a name="IdType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idType"></a>

```go
func IdType() *string
```

- *Type:* *string

---

##### `IdValue`<sup>Required</sup> <a name="IdValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idValue"></a>

```go
func IdValue() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseVpnCustomerGatewayV5Config <a name="EnterpriseVpnCustomerGatewayV5Config" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/enterprisevpncustomergatewayv5"

&enterprisevpncustomergatewayv5.EnterpriseVpnCustomerGatewayV5Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Asn: *f64,
	Id: *string,
	IdType: *string,
	IdValue: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/enterprise_vpn_customer_gateway_v5#name EnterpriseVpnCustomerGatewayV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.asn">Asn</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/enterprise_vpn_customer_gateway_v5#asn EnterpriseVpnCustomerGatewayV5#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/enterprise_vpn_customer_gateway_v5#id EnterpriseVpnCustomerGatewayV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.idType">IdType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/enterprise_vpn_customer_gateway_v5#id_type EnterpriseVpnCustomerGatewayV5#id_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.idValue">IdValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/enterprise_vpn_customer_gateway_v5#id_value EnterpriseVpnCustomerGatewayV5#id_value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/enterprise_vpn_customer_gateway_v5#tags EnterpriseVpnCustomerGatewayV5#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/enterprise_vpn_customer_gateway_v5#name EnterpriseVpnCustomerGatewayV5#name}.

---

##### `Asn`<sup>Optional</sup> <a name="Asn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.asn"></a>

```go
Asn *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/enterprise_vpn_customer_gateway_v5#asn EnterpriseVpnCustomerGatewayV5#asn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/enterprise_vpn_customer_gateway_v5#id EnterpriseVpnCustomerGatewayV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdType`<sup>Optional</sup> <a name="IdType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.idType"></a>

```go
IdType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/enterprise_vpn_customer_gateway_v5#id_type EnterpriseVpnCustomerGatewayV5#id_type}.

---

##### `IdValue`<sup>Optional</sup> <a name="IdValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.idValue"></a>

```go
IdValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/enterprise_vpn_customer_gateway_v5#id_value EnterpriseVpnCustomerGatewayV5#id_value}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/enterprise_vpn_customer_gateway_v5#tags EnterpriseVpnCustomerGatewayV5#tags}.

---



